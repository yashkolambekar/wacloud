import { NextResponse } from "next/server";
import Client, { Headers } from "../../../../package/src";

const GET = async () => {

  const phoneId = process.env.WHATSAPP_PHONE_ID || "";
  const token = process.env.WHATSAPP_TOKEN || "";
  const businessAccountId = process.env.BUSINESS_ACCOUNT_ID || "";

  const wa = new Client({
    businessAccountId: businessAccountId,
    phoneId: phoneId,
    token: token,
  });

  await wa.geTemplates();

  return NextResponse.json({
    message: "Success"
  }, {
    status: 200
  })


}

export {GET};