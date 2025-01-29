const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const client = require('../config/db');
 

 
/******Login*******/
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  
    console.log("api/login/--> ", username, password);
 
  if (!username || !password) {
    return res.status(400).json({ error: 'User ID and password are required.' });
  }
 
  try {
    //get all rows from db by user_id
    const result = await client.query('SELECT * FROM "users" WHERE user_id = $1', [username]);

    console.log("authController --> ", result);
 
    console.log("api/login/--> ", result);

    console.log("Database query result:", result.rows);
 
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'User not found.' });
    }
 
    //Filter rows by comparing the password,is_active and date_of_expiration
    const matchingRows = [];
    const currentDate = new Date();
 
    for (const row of result.rows) {
      console.log("current date ",currentDate)
      console.log("date of expiration ",row.date_of_expiration)
      const isValidPassword = await bcrypt.compare(password, row.password);
      if (isValidPassword && row.is_active == true && row.date_of_expiration > currentDate) {
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
};
 
 
module.exports = { loginUser};