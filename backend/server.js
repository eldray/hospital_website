const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const db = require('./db');
const Subscription = require('./Subscription');
const SearchResult = require('./models/SearchResult');



const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Nodemailer setup (replace with your own email configuration)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'emk.appiah@@gmail.com', // replace with your email address
    pass: 'your_password' // replace with your email password
  }
});

// Handle Doctor Appointment Form submission
app.post('/submit-doctor-appointment', (req, res) => {
  const { name, date, email, additionalInfo } = req.body;

  // Create email message
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'destination_email@example.com', // replace with recipient email address
    subject: 'Doctor Appointment Request',
    text: `
      Name: ${name}
      Date of Appointment: ${date}
      Email: ${email}
      Phone Number: ${number}
      Additional Information: ${additionalInfo}
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Appointment request submitted successfully!');
    }
  });
});

// Handle Contact Form submission
app.post('/submit-contact-form', (req, res) => {
  const { name, email, message } = req.body;

  // Create email message
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'destination_email@example.com', // replace with recipient email address
    subject: 'Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Contact form submitted successfully!');
    }
  });
});



// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Nodemailer setup (replace with your own email configuration)
// ...

// Handle Subscription Form submission
app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  const newSubscription = new Subscription({ email });

  newSubscription.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email saved to database:', email);
      res.json({ message: 'Thank you for subscribing!' });
    }
  });
});

// Assuming you have a model named `SearchResult`
const SearchResult = require('./models/SearchResult');

app.get('/search', async (req, res) => {
  const { query } = req.query;

  try {
    const results = await SearchResult.find({ title: { $regex: query, $options: 'i' } });
    res.json({ results });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
