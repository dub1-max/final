// app/api/sendform/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // Parse the form data from the request body
    const formData = await request.json();

    // Destructure the form data
    const { name, email, phone, subject, message } = formData;

    // Validate the form data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required except phone." },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || "465", 10),
      secure: true, // Use SSL
      auth: {
        user: "businessspaces2@gmail.com",
        pass: "glntxnezczgpjjtu",
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_SERVER_USER, // Send to your own email
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Message: ${message}
      `,
      html: `
        <h1>New Contact Form Submission From EyeCruit</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}