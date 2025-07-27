// curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \
// -H 'Content-Type: application/json' \
// -H 'Authorization: Bearer <ACCESS_TOKEN>' \
// -d '
// {
//   "messaging_product": "whatsapp",
//   "recipient_type": "individual",
//   "to": "<WHATSAPP_USER_PHONE_NUMBER>",
//   "type": "image",
//   "image": {
//     "id": "<MEDIA_ID>", <!-- Only if using uploaded media -->
//     "link": "<MEDIA_URL>", <!-- Only if using hosted media (not recommended) -->
//     "caption": "<MEDIA_CAPTION_TEXT>"
//   }
// }'

import axios from "axios";

// interface IsendImageResponse 


const sendImage = async (
    ctx: { phoneId: string; token: string; baseRequestUrl: string },
    data: { to: string, imageLink: string, caption?: string },
) => {

    if (!ctx.phoneId || !ctx.token || !ctx.baseRequestUrl || !data.to || !data.imageLink) {
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

            }
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

}


export default sendImage;