import axios from "axios";

const sendMessage = async (
  ctx: { phoneId: string; token: string; baseRequestUrl: string },
  data: {
    to: string;
    message: string;
    enableLinkPreview?: boolean;
  }
) => {
  if (
    !ctx.phoneId ||
    !ctx.token ||
    !ctx.baseRequestUrl ||
    !data.to ||
    !data.message
  ) {
    throw new Error("Missing required parameters");
  }

  if (data.enableLinkPreview === undefined) {
    data.enableLinkPreview = false;
  }

  const response = await axios.post(
    `${ctx.baseRequestUrl}/${ctx.phoneId}/messages`,
    {
      messaging_product: "whatsapp",
      type: "text",
      to: data.to,
      text: { body: data.message, preview_url: data.enableLinkPreview },
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
