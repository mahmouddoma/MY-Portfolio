import { Component } from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  // onSubmit(form: NgForm) {
  //   // Send email using nodemailer
  //   const transporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     auth: {
  //       user: 'your-email@gmail.com',
  //       pass: 'your-email-password'
  //     }
  //   });

  //   const message = {
  //     from: form.value.email,
  //     to: 'your-email@gmail.com',
  //     subject: 'New message from your website',
  //     text: form.value.message + '\n\n' + 'Phone: ' + form.value.phone
  //   };

  //   transporter.sendMail(message, function(error, info) {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log('Email sent: ' + info.response);
  //     }
  //   });

  //   // Reset the form
  //   form.resetForm();
  // }

}