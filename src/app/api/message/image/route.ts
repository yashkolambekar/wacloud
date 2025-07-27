import { NextRequest, NextResponse } from "next/server";
import Client from "../../../../../package/src/index";

const GET = async (req: NextRequest) => {
  const phoneId = process.env.WHATSAPP_PHONE_ID || "";
  const token = process.env.WHATSAPP_TOKEN || "";
  const businessAccountId = process.env.BUSINESS_ACCOUNT_ID || "";

  const wa = new Client(phoneId, token, businessAccountId);

  await wa.sendImage({
    to: "919324612161",
    imageLink: "https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790779/logoname_syjkwf_yq6woq.webp",
    caption: "BookMyPuja Logo"
  });

  return NextResponse.json(
    {
      status: "success",
      message: "Message sent successfully",
    },
    {
      status: 200,
    }
  );
};

export { GET };
