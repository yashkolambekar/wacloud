import { NextRequest, NextResponse } from "next/server";
import Client from "../../../../../package/src";

const GET = async (req: NextRequest) => {
  const phoneId = process.env.WHATSAPP_PHONE_ID || "";
  const token = process.env.WHATSAPP_TOKEN || "";
  const businessAccountId = process.env.BUSINESS_ACCOUNT_ID || "";

  const wa = new Client(phoneId, token, businessAccountId);

  await wa.sendCTA({
    to: "919324612161",
    ctaUrl: "https://www.example.com",
    ctaText: "Click Here",
    message: `This is a call to action message\nClick the button below to proceed.`,
  });

  return NextResponse.json(
    {
      status: "success",
      message: "CTA message sent successfully",
    },
    {
      status: 200,
    }
  );
};

export { GET };
