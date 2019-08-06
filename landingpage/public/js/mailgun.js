

const mailgun = require("mailgun-js");
const api_url = "https://api.mailgun.net/v3/sandbox69c321cb54cb460a8467b5816fa7d855.mailgun.org"
const api_key = '28a7fd1e3921c849508b7a8bb02fec8d-73ae490d-dd3121e8';
const DOMAIN = 'sandbox69c321cb54cb460a8467b5816fa7d855.mailgun.org';
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
const data = {
	from: 'Excited User <acoronadn@gmail.com>',
	to: 'tertuliaoax@gmail.com',
	subject: 'Hello TESTING',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {

	console.log(body);
	console.log(error);

});


function sendContactMail() {
	//MailGun
	console.log("sendContactMail")

};





/*----------------------------------------------------*/
/*	contact form

   $('form#contactForm button.submit').click(function() {

      $('#image-loader').fadeIn();

      var contactName = $('#contactForm #contactName').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

      var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      console.log(data)
      return false;
   });


------------------------------------------------------*/

