// This operation is what is called when you put the webhook URL into Twilio.
({ http_event }) => {
  let body = http_event.parsed_body;
  
  api.run('this.send_message');			// Calls the send_message operation for Twilio.
  api.run('this.send_mail');			// Calls the send_mail operation for SendGrid.
  
  return { status_code: 200 };
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/building/webhooks
 */