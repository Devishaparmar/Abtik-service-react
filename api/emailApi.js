import mongoose from "mongoose";
import Joi from "joi";
import nodemailer from "nodemailer";

const { SMTP_HOST_NAME, SMTP_PORT, SECURE, MONGODB_URI, SMTP_MAIL, SMTP_PASS } =
  process.env;

// ------------------------------
// MongoDB Connection
// ------------------------------
let cached = null;
const dbConnect = async () => {
  if (cached) return cached;
  cached = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
    serverSelectionTimeoutMS: 5000,
    tls: true,
  });
  return cached;
};

// ------------------------------
// Mongoose Schema
// ------------------------------
const emailSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
const EmailModel =
  mongoose.models.EmailMarketing ||
  mongoose.model("EmailMarketing", emailSchema);


const firmMarketingTemplate = (userInfo) => {
  try {
    let { email } = userInfo;
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Marketing Signup</title>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
          }
          * {
            box-sizing: border-box;
          }
          body {
            background-color: #f7f7f7;
            padding: 40px 20px;
          }
          .email-wrapper {
            max-width: 680px;
            margin: auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            background: radial-gradient(circle, rgba(0,30,60,0.8) 10%, rgba(0,0,0,1) 60%);
            padding: 35px 20px;
            color: white;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: 1.5px;
            position: relative;
          }
          .header-divider {
            height: 8px;
            background: radial-gradient(circle, rgba(0,30,60,0.8) 10%, rgba(0,0,0,1) 60%);
          }
          .content {
            padding: 40px 50px;
          }
          h2 {
            color: #333;
            margin: 0 0 20px 0;
            font-size: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .emoji {
            font-size: 28px;
            margin-right: 10px;
          }
          p {
            color: #555;
            margin-bottom: 30px;
            font-size: 16px;
            line-height: 1.6;
          }
          .highlight {
            background-color: rgba(0, 30, 60, 0.08);
            border-left: 4px solid rgba(0, 30, 60, 0.8);
            padding: 15px;
          }
          table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            border: none;
            border-radius: 14px;
            overflow: hidden;
            margin: 25px 0;
            box-shadow: 0 5px 15px rgba(0, 30, 60, 0.08);
            font-size: 16px;
          }
          th {
            background: radial-gradient(circle, rgba(0,30,60,0.8) 10%, rgba(0,0,0,1) 60%);
            color: #ffffff;
            width: 30%;
            font-weight: 600;
            letter-spacing: 0.5px;
            padding: 18px 24px;
            text-align: left;
            vertical-align: top;
          }
          td {
            background-color: #ffffff;
            color: #444;
            border-bottom: 1px solid #f0f0f0;
            padding: 18px 24px;
            text-align: left;
            vertical-align: top;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:nth-child(even) td {
            background-color: #fafafa;
          }
          a {
            color: rgba(0, 30, 60, 0.8);
            text-decoration: none;
            font-weight: 500;
          }
          .footer {
            margin-top: 10px;
            background-color: #fcfcfc;
            font-size: 14px;
            color: #888;
            text-align: center;
            border-top: 1px solid #eee;
            padding: 25px 40px;
          }
          .social-links {
            margin: 20px 0;
          }
          .social-links a {
            display: inline-block;
            margin: 0 10px;
            color: rgba(0, 30, 60, 0.8);
            text-decoration: none;
          }
          .footer-note {
            display: block;
            margin-top: 8px;
            font-size: 13px;
            color: #aaa;
          }
          @media only screen and (max-width: 600px) {
            .content {
              padding: 30px 20px;
            }
            .header {
              padding: 25px 15px;
              font-size: 26px;
            }
            table {
              border-radius: 8px;
            }
            th, td {
              padding: 15px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">Abtik Services</div>
          <div class="header-divider"></div>
          <div class="content">
            <h2><span class="emoji">📩</span> New Marketing Signup</h2>
            <p class="highlight">You have received a new marketing signup with the following details:</p>
            <table>
              <tr>
                <th>Email</th>
                <td><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <th>Signup Date</th>
                <td>${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>
          <div class="footer">
            <div class="social-links">
              <a href="https://www.facebook.com/people/Abtik-Digital/61557004832458/?rdid=BNLPpD0K1E703Jao&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16itJgeEAc%2F">Facebook</a> • 
              <a href="https://www.instagram.com/abtik.digital">Instagram</a> • 
              <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHJQugFIMzy6QAAAZeq55CAMLUnn79hNkV7chXgOBjzkhFbezWCJw2nuPyYxOLIgJhDK9E8Zs-8hgiSZL8isIpwxOUosmlZKfTtF_86TL7eE8hAf626pHjnyeyVNJeL78qa0ss=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fabtik-digitals%2F">LinkedIn</a>
            </div>
            This email was automatically generated by your website's marketing form.
            <span class="footer-note">© 2025 Abtik Services. All rights reserved.</span>
          </div>
        </div>
      </body>
    </html>`;
  } catch (error) {
    console.error(error);
  }
};

const userMarketingTemplate = (userInfo) => {
  try {
    let { email } = userInfo;
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Abtik Services</title>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
          }
          * {
            box-sizing: border-box;
          }
          body {
            background-color: #f7f7f7;
            padding: 40px 20px;
          }
          .email-wrapper {
            max-width: 680px;
            margin: auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            background: radial-gradient(circle, rgba(0,30,60,0.8) 10%, rgba(0,0,0,1) 60%);
            padding: 35px 20px;
            color: white;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: 1.5px;
          }
          .header-divider {
            height: 8px;
            background: radial-gradient(circle, rgba(0,30,60,0.8) 10%, rgba(0,0,0,1) 60%);
          }
          .content {
            padding: 40px 50px;
          }
          h2 {
            color: #333;
            margin: 0 0 20px 0;
            font-size: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .emoji {
            font-size: 28px;
            margin-right: 10px;
          }
          p {
            color: #555;
            margin-bottom: 20px;
            font-size: 16px;
            line-height: 1.6;
          }
          .highlight {
            background-color: rgba(0, 30, 60, 0.08);
            border-left: 4px solid rgba(0, 30, 60, 0.8);
            padding: 15px;
            margin-bottom: 25px;
          }
          .message-box {
            background-color: #f9f9f9;
            border-radius: 12px;
            padding: 25px;
            margin: 30px 0;
            border: 1px solid #eee;
          }
          .message-box h3 {
            margin-top: 0;
            color: rgba(0, 30, 60, 0.8);
            font-size: 18px;
          }
          .button {
            display: inline-block;
            background: radial-gradient(circle, rgba(0,30,60,0.8) 10%, rgba(0,0,0,1) 60%);
            color: white;
            text-decoration: none;
            padding: 12px 28px;
            border-radius: 50px;
            font-weight: 600;
            margin: 15px 0;
            text-align: center;
          }
          .divider {
            height: 1px;
            background-color: #eee;
            margin: 30px 0;
          }
          .footer {
            margin-top: 10px;
            background-color: #fcfcfc;
            font-size: 14px;
            color: #888;
            text-align: center;
            border-top: 1px solid #eee;
            padding: 25px 40px;
          }
          .social-links {
            margin: 20px 0;
          }
          .social-links a {
            display: inline-block;
            margin: 0 10px;
            color: rgba(0, 30, 60, 0.8);
            text-decoration: none;
          }
          .footer-note {
            display: block;
            margin-top: 8px;
            font-size: 13px;
            color: #aaa;
          }
          @media only screen and (max-width: 600px) {
            .content {
              padding: 30px 20px;
            }
            .header {
              padding: 25px 15px;
              font-size: 26px;
            }
            .message-box {
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">Abtik Services</div>
          <div class="header-divider"></div>
          <div class="content">
            <h2><span class="emoji">🎉</span> Welcome to Our Community</h2>
            <p class="highlight">Thank you for joining the Abtik Services marketing community!</p>
            <p>We're thrilled to have you on board. Your subscription means you'll receive exclusive updates, offers, and insights from our team.</p>
            <div class="message-box">
              <h3>What's Next?</h3>
              <p>Expect to hear from us soon with exciting content and opportunities tailored just for you. We'll keep you in the loop with the latest from Abtik Services.</p>
            </div>
            <p>Explore our website to learn more about what we offer.</p>
            <center><a href="https://www.abtikdigital.com" class="button">Visit Our Website</a></center>
            <div class="divider"></div>
            <p>If you have any questions, contact us at <strong><a href="tel:+918928138434">+91 89281 38434</a></strong>.</p>
          </div>
          <div class="footer">
            <div class="social-links">
              <a href="https://www.facebook.com/people/Abtik-Digital/61557004832458/?rdid=BNLPpD0K1E703Jao&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16itJgeEAc%2F">Facebook</a> • 
              <a href="https://www.instagram.com/abtik.digital">Instagram</a> • 
              <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHJQugFIMzy6QAAAZeq55CAMLUnn79hNkV7chXgOBjzkhFbezWCJw2nuPyYxOLIgJhDK9E8Zs-8hgiSZL8isIpwxOUosmlZKfTtF_86TL7eE8hAf626pHjnyeyVNJeL78qa0ss=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fabtik-digitals%2F">LinkedIn</a>
            </div>
            Thank you for choosing Abtik Services.
            <span class="footer-note">© 2025 Abtik Services. All rights reserved.</span>
          </div>
        </div>
      </body>
    </html>`;
  } catch (error) {
    console.error(error);
  }
};

const transporter = nodemailer.createTransport({
  pool: true,
  host: SMTP_HOST_NAME,
  port: Number(SMTP_PORT),
  secure: SECURE === "true",
  auth: {
    user: SMTP_MAIL,
    pass: SMTP_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  try {
    await dbConnect();

    const schema = Joi.object({
      email: Joi.string().email().required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { email } = value;

    const existing = await EmailModel.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already subscribed" });
    }

    const saved = await EmailModel.create({ email });

    // Fire-and-forget background email sending
    const [userHtml, adminHtml] = [
      userMarketingTemplate({ email }),
      firmMarketingTemplate({ email }),
    ];

    await Promise.all([
      transporter.sendMail({
        from: SMTP_MAIL,
        to: email,
        subject: "Welcome to Abtik-Services",
        html: userHtml,
      }),
      transporter.sendMail({
        from: SMTP_MAIL,
        to: SMTP_MAIL,
        subject: "New Marketing Signup",
        html: adminHtml,
      }),
    ]);
    // Send response EARLY (non-blocking)
    res.status(201).json({
      message: "Subscription successful. Emails will be sent.",
      data: saved,
    });

    // Optional: You could log or write a success status to a DB/log here
  } catch (err) {
    console.error("Server error:", err);
    // Avoid sending res.status here; it's already sent.
  }
}
