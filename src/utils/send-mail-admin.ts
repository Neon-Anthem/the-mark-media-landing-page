"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface ISendEmailOptions {
  firstName: string;
  lastName: string;
  companyName: string;
  phoneNumber: string;
  email: string;
}

export async function sendAdminMail({ ...item }: ISendEmailOptions) {
  try {
    await transporter.sendMail({
      from: `"Inquiry on website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "New inqury on website",
      text: "New inquiry on website", // Plain text version
      html: `<div><ul> <li>${item.firstName}</li> <li>${item.lastName}</li> <li>${item.companyName}</li> <li>${item.phoneNumber}</li> <li>${item.email}</li> </ul></div>`, // HTML version
    });
  } catch (e) {
    console.log("Something went wrong while sending email");
    console.log(e);
    return 0;
  }
  return 1;
}
