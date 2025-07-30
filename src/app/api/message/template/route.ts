import { NextResponse } from "next/server";
import Client, { Headers, Language, Parameters } from "../../../../../package/src";

const GET = async () => {
  const phoneId = process.env.WHATSAPP_PHONE_ID || "";
  const token = process.env.WHATSAPP_TOKEN || "";
  const businessAccountId = process.env.BUSINESS_ACCOUNT_ID || "";

  const wa = new Client(phoneId, token, businessAccountId);

  await wa.sendTemplate({
    to: "919324612161",
    language: Language.English,
    name: "testing_template",
    header: Headers.image("https://res.cloudinary.com/dpaigt2bx/image/upload/v1745254113/mka.jpg"),
    // header: Headers.text("This is a header text"),
    data: [
        Parameters.named("customer_name", "John Doe"),
        Parameters.named("officer_name", "Jane Smith"),
    ]
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
