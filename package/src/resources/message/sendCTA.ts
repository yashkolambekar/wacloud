import axios from "axios";

const sendCTA = async (
  ctx: { phoneId: string; token: string; baseRequestUrl: string },
  data: { to: string; ctaUrl: string; ctaText: string; message: string; footer?: string }
) => {
  if (
    !ctx.phoneId ||
    !ctx.token ||
    !ctx.baseRequestUrl ||
    !data.to ||
    !data.ctaUrl ||
    !data.ctaText ||
    !data.message
  ) {
    throw new Error("Missing required parameters");
  }

  const response = await axios.post(
    `${ctx.baseRequestUrl}/${ctx.phoneId}/messages`,
    {
      messaging_product: "whatsapp",
      type: "interactive",
      to: data.to,
      interactive: {
        type: "cta_url",
        body: {
          text: data.message,
        },
        action: {
          name: "cta_url",
          parameters: {
            display_text: data.ctaText,
            url: data.ctaUrl,
          },
        },
        footer: {
            text: data.footer,
        }
      },
    },
    {
      headers: {
        Authorization: `Bearer ${ctx.token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 200) {
    throw new Error(`Failed to send message: ${response.statusText}`);
  }

  console.log("Message sent successfully:", response.data);

  return true;
};

export default sendCTA;
