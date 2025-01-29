const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./Route/userRoutes');
const corsOptions = {
  //origin: `${process.env.FRONTEND_URI}`,
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
// app.use('/api', routes);
const port = 4000;

const client = require('./config/db');



app.post('/api/login', async(req, res) => {
  
            const { username, password } = req.body;
            console.log("api/login/--> ", username, password);
 
            if (!username || !password) {
              return res.status(400).json({ error: 'User ID and password are required.' });
            }
 
            try {
              const result = await client.query('SELECT * FROM "users" WHERE user_id = $1', [username]);
              console.log("authController --> ", result);
              console.log("api/login/--> ", result);
              console.log("Database query result:", result.rows);
 
              if (result.rows.length === 0) {
                return res.status(401).json({ error: 'User not found.' });
              }
 
              const matchingRows = result.rows;
 
 
              if (matchingRows.length === 0) {
                return res.status(404).json({ error: 'Invalid credentials.' });
              }

              const user = matchingRows[0];

              res.status(200).json({ 
                msg: "User authenticated successfully", 
                data: matchingRows,
                success: "True",
              });
 
            } catch (err) {
              console.error("Error during login:", err);
              res.status(500).json({ error: 'Something went wrong. Please try again later.' });
            }

});




app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});





app.listen(port, ()=>{
    console.log("Server running on port : "+port);
});