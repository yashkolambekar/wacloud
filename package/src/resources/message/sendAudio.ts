import axios from "axios";

const sendAudio = async (
  ctx: { phoneId: string; token: string; baseRequestUrl: string },
  data: { to: string; audioLink: string;}
) => {
  if (
    !ctx.phoneId ||
    !ctx.token ||
    !ctx.baseRequestUrl ||
    !data.to ||
    !data.audioLink
  ) {
    throw new Error("Missing required parameters");
  }

  const response = await axios.post(
    `${ctx.baseRequestUrl}/${ctx.phoneId}/messages`,
    {
      messaging_product: "whatsapp",
      type: "audio",
      to: data.to,
      audio: {
        link: data.audioLink,
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

export default sendAudio;
