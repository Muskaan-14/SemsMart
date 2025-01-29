const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');
const { connectDb }= require('./config/db');

const routes = require('./Route/userRoutes');
const corsOptions = {
  //origin: `${process.env.FRONTEND_URI}`,
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const app = express();
connectDb();
app.use(cors(corsOptions));
app.use(bodyParser.json());
// app.use('/api', routes);
const port = 4000;





app.post('/api/login', (req, res) => {
  console.log("Server.js --> ", req.body);
  const { username, password } = req.body;
  console.log("Server.js --> ", username, password)
  // Dummy user data (replace with your real user authentication logic)
  const dummyUser = { username: 'test@example.com', password: 'password123' };

  if (username === dummyUser.username && password === dummyUser.password) {
    return res.json({ success: true, message: 'Login successful', token: 'dummy-jwt-token' });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});






{/*
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const client = require('./config/db');


app.post('/api/login', (req, res) => {
  
            const { username, password } = req.body;
            console.log("api/login/--> ", username, password);
 
            if (!username || !password) {
              return res.status(400).json({ error: 'User ID and password are required.' });
            }
 
            try {
              //get all rows from db by user_id
              const result = client.query('SELECT * FROM "users" WHERE user_id = $1', [username]);
              console.log("authController --> ", result);
              console.log("api/login/--> ", result);
              console.log("Database query result:", result.rows);
 
              if (result.rows.length === 0) {
                return res.status(401).json({ error: 'User not found.' });
              }
 
              //Filter rows by comparing the password,is_active and date_of_expiration
              const matchingRows = [];
 
              for (const row of result.rows) {
                const isValidPassword = bcrypt.compare(password, row.password);
                if (isValidPassword && row.loggedin == false) {
                  matchingRows.push(row);
                }
                else{
                  return res.status(403).json({
                    msg:"You have no access . Contact to your Admin"
                  })
                }
              }
 
              if (matchingRows.length === 0) {
                return res.status(404).json({ error: 'Invalid credentials.' });
              }
 
              // Generate a JWT token 
              const user = matchingRows[0];
              const token = jwt.sign({ id: user.user_id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
 
              // send Response
              res.status(200).json({ 
                msg: "User authenticated successfully", 
                token, 
                data: matchingRows 
              });
 
            } catch (err) {
              console.error("Error during login:", err);
              res.status(500).json({ error: 'Something went wrong. Please try again later.' });
            }

});
*/}





app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});




app.listen(port, ()=>{
    console.log("Server running on port : "+port);
});