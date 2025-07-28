import { NextResponse } from "next/server";
import Client, { Headers } from "../../../../../package/src";

const GET = async () => {
  const phoneId = process.env.WHATSAPP_PHONE_ID || "";
  const token = process.env.WHATSAPP_TOKEN || "";
  const businessAccountId = process.env.BUSINESS_ACCOUNT_ID || "";

  const wa = new Client(phoneId, token, businessAccountId);

  await wa.sendCTA({
    to: "919324612161",
    ctaUrl: "https://www.example.com",
    ctaText: "Click Here",
    message: `This is a call to action message\nClick the button below to proceed.`,
    header: Headers.image("https://images.unsplash.com/photo-1741879080222-b9b5f20b3333?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
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
