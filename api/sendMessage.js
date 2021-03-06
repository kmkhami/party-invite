const client = require("twilio")(
    process.env.REACT_APP_TWILIO_ACCOUNT_SID,
    process.env.REACT_APP_TWILIO_AUTH_TOKEN
);

export default async (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    client.messages.create({
        from: process.env.REACT_APP_TWILIO_PHONE_NUMBER,
        to: req.body.to,
        body: "Hey " + req.body.name + "! The party will be located at the Phi Si House. You can text the host at 248-761-4355 for more information.",
    })
    .then(() => {
        res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
        console.log(err);
        res.send(JSON.stringify({ success: false }));
    });
};  
  