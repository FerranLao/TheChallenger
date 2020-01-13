import { transport } from "./";

export default (to, validationCode) =>
  transport.sendMail({
    from: process.env.MAIL,
    to,
    subject: "Confirm your The Challenger email ",
    text: "Welcome to TheChallenger",
    html: `<a href="localhost:3000/auth/confirm/${validationCode}">confirm your email<a>
    <p>or copy this url in your navigator localhost:3000/auth/confirm/${validationCode}</p> `
  });
