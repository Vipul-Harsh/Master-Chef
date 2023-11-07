import User from "../model/userSchema.js";
import express from 'express'
import bcrypt from 'bcrypt';
import Recipe from "../model/recipeSchema.js"; 
import nodemailer from 'nodemailer';
const router= express.Router();
router.get('/',(req,res)=>{
    res.send(`Hello world from the server router.js `);
})
router.get('/login',(req,res)=>{
res.send(`hello login `);
})

router.get('/add',(req,res)=>{
res.send(`hello adding recipe`)
})

router.post('/register', async (req, res) => {
 console.log(req.body);
  const { name, email, password, confirmpassword } = req.body;

  if (!name || !email || !password || !confirmpassword) {
    return res.status(422).json({ error: 'Please fill in all the fields properly' });
  }

  if (password !== confirmpassword) {
    return res.status(422).json({ error: 'Passwords do not match' });
  }

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(422).json({ error: 'Email already registered' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword, 
      confirmpassword, 
    });

    await newUser.save();

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to register' });
  }
   
});


router.post('/login', async (req, res) => {
console.log(req.body)

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ error: 'Please provide both email and password.' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'User not found. Please register an account.' });
    }

    const storedHashedPassword = user.confirmpassword; // Use the field 'confirmpassword' for the hashed password.

    // Use bcrypt to compare the provided password with the stored hashed password.
    bcrypt.compare(password, user.password, (err, result) => {
  if (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }

  if (result) {
    // Passwords match, so consider the login successful.
    res.status(200).json({ message: 'User logged in successfully' });
  } else {
    // Passwords don't match, return an error.
    res.status(401).json({ error: 'Incorrect password. Please try again.' });
  }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
  });
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., 'Gmail', 'Yahoo', etc.
    auth: {
      user: 'harshvipul.1704@gmail.com', // Your email address
      pass: 'ozcvuvonnehisyqf', // Your email password or application-specific password
    },
  });
  
  router.post("/add", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newRecipe = new Recipe({
      name,
     email,
     subject,
      message
    });

    const savedRecipe = await newRecipe.save();
    const mailOptions = {
      from: 'harshvipul.1704@gmail.com',
      to: email, // Use the provided email address
      subject: 'New Message',
      text: `Thankyou ${name} for contacting us at Master-chef we will get back to you soon !!`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email: ' + error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(500).json({ error: "Error adding the recipe to the database" });
  }
});


export default router;













