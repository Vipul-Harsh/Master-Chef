import User from "../model/userSchema.js";
import express from 'express'
import bcrypt from 'bcrypt';


const router= express.Router();
router.get('/',(req,res)=>{
    res.send(`Hello world from the server router.js `);
})
router.get('/login',(req,res)=>{
res.send(`hello login `);
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

    // Hash the password using bcrypt
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

  


export default router;














// router.post('/register', async (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body;
  
//     if (!name || !email || !phone || !password || !cpassword) {
//       return res.status(422).json({ error: "Please fill in all the fields properly" });
//     }
  
//     try {
//       const userExist = await User.findOne({ email: email });
  
//       if (userExist) {
//         return res.status(422).json({ error: "Email already registered" });
//       }
  
//       const newUser = new User({ name, email, phone, password, cpassword });
  
//       await newUser.save();
//       res.status(200).json({ message: "User registered successfully" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Failed to register" });
//     }
//   });
  