import nodemailer from "nodemailer";

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

export const sendOTPEmail = async (email, otp) => {
  console.log("Testing SMTP connection...");

  await transporter.verify();

  console.log("SMTP Connected Successfully");

  await transporter.sendMail({
    from: `"SmartHire" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "SmartHire Password Reset OTP",
    html: `
      <h2>Your OTP is:</h2>
      <h1>${otp}</h1>
    `,
  });
};

export const sendOTPEmail = async (email, otp) => {
  await transporter.sendMail({
    from: `"SmartHire" <${process.env.EMAIL_USER}>`,

    to: email,

    subject: "SmartHire Password Reset OTP",

    html: `
      <div style="font-family:Arial,sans-serif;padding:30px">
        <h2 style="color:#0891b2">
          SmartHire Password Reset
        </h2>

        <p>
          We received a request to reset your password.
        </p>

        <p>Your OTP is:</p>

        <h1
          style="
            letter-spacing:8px;
            color:#111827;
            background:#f3f4f6;
            padding:15px;
            width:max-content;
            border-radius:10px;
          "
        >
          ${otp}
        </h1>

        <p>
          This OTP will expire in
          <strong>10 minutes</strong>.
        </p>

        <br/>

        <small>
          If you didn't request this,
          simply ignore this email.
        </small>
      </div>
    `,
  });
};