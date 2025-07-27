import { NextRequest, NextResponse } from "next/server";
import Client from "../../../../../package/src/index";

const GET = async (req: NextRequest) => {
  const phoneId = process.env.WHATSAPP_PHONE_ID || "";
  const token = process.env.WHATSAPP_TOKEN || "";
  const businessAccountId = process.env.BUSINESS_ACCOUNT_ID || "";

  const wa = new Client(phoneId, token, businessAccountId);

  await wa.sendMessage({
    to: "919324612161",
    message: "Hello from WaCloud!",
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
