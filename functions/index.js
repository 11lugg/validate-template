const functions = require("firebase-functions");
const axios = require("axios");
const busboy = require("busboy");

exports.subscribe = functions
  .region("europe-west2")
  .runWith({ timeoutSeconds: 120 })
  .https.onRequest(async (request, response) => {
    const allowedOrigins = [
      "http://localhost:3000",
      "https://validate-template.web.app",
    ];
    const origin = request.headers.origin;

    if (allowedOrigins.includes(origin)) {
      response.set("Access-Control-Allow-Origin", origin);
    } else {
      response.status(403).send("Unauthorized origin");
      return;
    }

    response.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
    response.set("Access-Control-Allow-Headers", "*");

    if (request.method === "OPTIONS") {
      response.status(204).send("");
      return;
    } else {
      const bb = busboy({ headers: request.headers });
      const formData = {};

      bb.on("field", (fieldname, val) => {
        formData[fieldname] = val;
      });

      bb.on("finish", async () => {
        const mailchimpURL = formData.mailchimpURL;

        if (!mailchimpURL) {
          return response.status(400).send("Mailchimp URL not provided.");
        }

        try {
          const mailchimpResponse = await axios.post(
            mailchimpURL,
            new URLSearchParams({ EMAIL: formData.EMAIL }).toString(),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );

          response.send(mailchimpResponse.data);
        } catch (error) {
          console.error("Error when trying to subscribe to Mailchimp: ", error);
          if (error.response && error.response.data) {
            response
              .status(500)
              .send(
                `Error subscribing to Mailchimp. Message: ${error.response.data}`
              );
          } else {
            response.status(500).send("Error subscribing to Mailchimp.");
          }
        }
      });

      bb.end(request.rawBody);
    }
  });
