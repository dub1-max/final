import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, location, center, slot } = await req.json();

    if (!email || !location || !center || !slot) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configure Nodemailer Transport for SMTP on port 587
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your App password
      },
      tls: {
        rejectUnauthorized: false, // Avoid issues with self-signed certificates
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Booking Confirmation - BusinessCenter",
      html: `
        <h2>Welcome to BusinessCenter! 🎉</h2>
        <p>Your session has been booked successfully.</p>
        <p><strong>📍 Location:</strong> ${location}</p>
        <p><strong>🏢 Business Center:</strong> ${center}</p>
        <p><strong>🕒 Time Slot:</strong> ${slot}</p>
        <p>We look forward to seeing you!</p>
      `,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}