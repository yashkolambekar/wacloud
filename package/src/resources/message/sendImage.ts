//  only jpeg and png images are supported\
//  the image link must be publicly accessible

import axios from "axios";

const sendImage = async (
  ctx: { phoneId: string; token: string; baseRequestUrl: string },
  data: { to: string; imageLink: string; caption?: string }
) => {
  if (
    !ctx.phoneId ||
    !ctx.token ||
    !ctx.baseRequestUrl ||
    !data.to ||
    !data.imageLink
  ) {
    throw new Error("Missing required parameters");
  }

  const response = await axios.post(
    `${ctx.baseRequestUrl}/${ctx.phoneId}/messages`,
    {
      messaging_product: "whatsapp",
      type: "image",
      to: data.to,
      image: {
        link: data.imageLink,
        caption: data.caption,
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

export default sendImage;
