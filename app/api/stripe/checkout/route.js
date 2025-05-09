import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";

export async function POST(request) {
  try {
    const headerList = await headers();
    const origin = headerList.get("origin");

    // 1- Get the price ID from the request
    const { priceId } = await request.json();

    // 2- Create a checkout session
    // docs: https://docs.stripe.com/api/checkout/sessions/create
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "payment", // one time payment
      success_url: `${origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      //   cancel_url: `${origin}/order/cancel`, // optional
    });

    // 3- Return the session url
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session: ", error);

    return NextResponse.json(
      { message: "Error creating checkout session" },
      { status: 500 }
    );
  }
}
