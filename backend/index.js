require('dotenv').config()
const express = require('express');
const app = express();
const cors=require('cors')
const PORT = process.env.PORT || 8080 
const cookieparser=require('cookie-parser');
//imports
const authRoutes =require( "./routes/auth.routes.js");

//middlewares
app.use(cors())
app.use(express.json())
app.use(cookieparser());
app.use(express.urlencoded({extended:true}))


app.use("/api/auth", authRoutes);
app.use('/', (req, res) => {
  res.send('server bro')
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
