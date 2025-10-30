import { NextResponse } from "next/server";
import Client, { Headers } from "../../../../../package/src";

const GET = async () => {
  const phoneId = process.env.WHATSAPP_PHONE_ID || "";
  const token = process.env.WHATSAPP_TOKEN || "";
  const businessAccountId = process.env.BUSINESS_ACCOUNT_ID || "";

  const wa = new Client({
    businessAccountId: businessAccountId,
    phoneId: phoneId,
    token: token,
  });

  await wa.sendCTA({
    to: "919324612161",
    ctaUrl: "https://www.example.com",
    ctaText: "Click Here",
    message: `This is a call to action message\nClick the button below to proceed.`,
    header: Headers.document("https://customerinvoicebucketmumbai.s3.ap-south-1.amazonaws.com/invoices/mka-meenkulathi/production/4d9d8c79-01ea-4464-b09c-95a7c8c766fc.pdf")
    // footer: "Sent with Wacloud",    
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
