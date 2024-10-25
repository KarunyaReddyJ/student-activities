require('dotenv').config()
const express = require('express');
const app = express();
const cors=require('cors')
const PORT = process.env.PORT || 8080 

//imports

const AuthRouter=require('./routes/auth')

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/auth',AuthRouter)
app.use('/', (req, res) => {
  res.send('server bro')
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
