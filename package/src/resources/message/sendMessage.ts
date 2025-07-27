import axios from "axios";

const sendMessage = async (
  ctx: { phoneId: string; token: string; baseRequestUrl: string },
  to: string,
  message: string
) => {
  if (!ctx.phoneId || !ctx.token || !ctx.baseRequestUrl) {
    throw new Error("Missing required parameters");
  }

  const response = await axios.post(
    `${ctx.baseRequestUrl}/${ctx.phoneId}/messages`,
    {
      messaging_product: "whatsapp",
      to: to,
      text: { body: message },
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

export default sendMessage;
