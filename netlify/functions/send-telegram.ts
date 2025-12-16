const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export default async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return new Response(
      JSON.stringify({ error: "Server misconfigured" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid JSON" }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
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
    return new Response(
      JSON.stringify({ error: "Name and phone are required" }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
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

  try {
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

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      console.error("Telegram API error:", errorText);
      return new Response(
        JSON.stringify({ 
          error: "Не удалось отправить сообщение в Telegram",
          details: errorText 
        }),
        {
          status: 502,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    let telegramData;
    try {
      telegramData = await telegramResponse.json();
    } catch (parseError) {
      return new Response(
        JSON.stringify({ 
          error: "Неверный формат ответа от Telegram API" 
        }),
        {
          status: 502,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    if (telegramData.ok === false) {
      return new Response(
        JSON.stringify({ 
          error: telegramData.description || "Не удалось отправить сообщение в Telegram" 
        }),
        {
          status: 502,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({ ok: true }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Внутренняя ошибка сервера",
        details: error instanceof Error ? error.message : String(error)
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
};
