import nodemailer from "nodemailer";

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  family: 4,
});

export const sendOTPEmail = async (email, otp) => {
  console.log("Testing SMTP connection...");

  await transporter.verify();

  console.log("SMTP Connected Successfully");

  await transporter.sendMail({
    from: `"SmartHire" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "SmartHire Password Reset OTP",
    html: `<h2>Your OTP is</h2><h1>${otp}</h1>`,
  });
};