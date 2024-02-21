           // 5 TASK;

//a Node.js script using the Nodemailer library to send an email via a Gmail account. 

const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'myEmail@gmail.com', // Your Gmail email address
        password: '******' // Your Gmail password
    }
});

// Setup email data
let mailOptions = {
    from: 'myEmail@gmail.com', // Sender address
    //To send to more than one Email, use (,) for the seperation and add the newEmail (to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',)
    to: 'friendsemail@gmail.com', // List of recipients
    subject: 'Test Email', // Subject line
    text: 'This is a test email sent from Node.js using Nodemailer' // Plain text body
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %', info.messageId);
});
