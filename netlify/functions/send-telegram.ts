const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

const respond = (statusCode: number, body: Record<string, unknown>) => ({
  statusCode,
  headers,
  body: JSON.stringify(body),
});

export const handler = async (event: {
  httpMethod: string;
  body: string | null;
}) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers };
  }

  if (event.httpMethod !== "POST") {
    return respond(405, { error: "Method not allowed" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return respond(500, { error: "Server misconfigured" });
  }

  let payload: unknown;
  try {
    payload = event.body ? JSON.parse(event.body) : {};
  } catch {
    return respond(400, { error: "Invalid JSON" });
  }

  const { name, phone, message, program, telegram, email, programPrice } = payload as {
    name?: string;
    phone?: string;
    message?: string;
    program?: string;
    telegram?: string;
    email?: string;
    programPrice?: number;
  };

  if (!name || !phone) {
    return respond(400, { error: "Name and phone are required" });
  }

  const formattedPrice =
    typeof programPrice === "number"
      ? `${programPrice.toLocaleString("ru-RU")} ₽`
      : "—";

  const text = [
    "Новая заявка с сайта:",
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Telegram: ${telegram || "—"}`,
    `Email: ${email || "—"}`,
    `Программа: ${program || "—"}`,
    `Стоимость: ${formattedPrice}`,
    `Сообщение: ${message || "—"}`,
  ].join("\n");

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    }
  );

  const telegramData = await telegramResponse.json();

  if (!telegramResponse.ok || telegramData.ok === false) {
    return respond(502, { error: "Failed to deliver message" });
  }

  return respond(200, { ok: true });
};
