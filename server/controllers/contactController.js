const apiResponse = require("../middleware/apiResponseMiddleware");
const nodemailer = require("nodemailer");
const { environment } = require("../env");

function containsAllKeys(obj, requiredKeys) {
  for (const key of requiredKeys) {
    if (!(key in obj)) {
      return { result: false, message: key + " is required." };
    }
  }

  return { result: true };

  // return requiredKeys.every((key) => obj.hasOwnProperty(key));
}
// API endpoint to send an email
exports.sendMail = (req, res) => {
  try {
    const requiredValidationResult = containsAllKeys(req.body, [
      "name",
      "email",
      "message",
    ]);
    if (!requiredValidationResult.result) {
      return apiResponse.badRequest(res, {
        message: requiredValidationResult.message,
      });
    }

    const { name, email, message } = req.body;

    // Configuring Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.forwardemail.net",
      port: 465,
      secure: true,
      auth: {
        user: environment.MAIL_SERVICE.MAIL_CREDS.user,
        pass: environment.MAIL_SERVICE.MAIL_CREDS.pass,
      },
    });

    const mailOptions = {
      from: environment.MAIL_SERVICE.MAIL_FROM,
      to: environment.MAIL_SERVICE.MAIL_TO,
      subject: environment.MAIL_SERVICE.SUBJECT,
      html: `<div><span style="color:gray;">From:</span> <b>${name}</b> &#60;${email}&#62; <br>
               <span style="color:gray;">Message:</span> ${message}</div>`,
    };

    // Sending the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return apiResponse.internalServerError(res, {
          message: "Error sending email",
        });
      } else {
        return apiResponse.success(res, {
          message: "Email sent successfully !",
          data: "",
        });
      }
    });
  } catch (error) {
    return apiResponse.internalServerError(res, error);
  }
};
