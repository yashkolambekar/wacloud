import { NextResponse } from "next/server";
import Client from "../../../../../package/src";

const GET = () => {

    const phoneId = process.env.WHATSAPP_PHONE_ID || "";
    const token = process.env.WHATSAPP_TOKEN || "";
    const businessAccountId = process.env.BUSINESS_ACCOUNT_ID || "";
 
    const wa = new Client({
    businessAccountId: businessAccountId,
    phoneId: phoneId,
    token: token,
  });

    wa.sendAudio({
        to: "919324612161",
        audioLink: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    });

    return NextResponse.json(
        {
            status: "success",
            message: "Audio message sent successfully",
        },
        {
            status: 200,
        }
    );


}

export { GET };