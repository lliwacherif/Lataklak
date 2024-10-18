// app/api/your-endpoint/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, adress, occupation, city, referrer } = body;

    const req = await axios.post(
      "https://n8n.lataklak.tn/webhook/09835f9a-8232-462f-b9d8-5246b00058cc",
      {
        name,
        phone,
        email,
        adress,
        job: occupation,
        city,
        referral: referrer,
      }
    );
    // Send a success response
    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
