// This operation is what is called when you put the webhook URL into Twilio.
// Learn more at https://www.transposit.com/docs/building/webhooks/

({ http_event }) => {
  let body = http_event.parsed_body; // The contents of the webhook in easily readable JSON.

  api.run("this.send_message"); // Calls the send_message operation for Twilio.
  api.run("this.send_mail"); // Calls the send_mail operation for SendGrid.

  return { status_code: 200, headers: { "Content-Type": "application/xml" } };
};

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/building/webhooks
 */
