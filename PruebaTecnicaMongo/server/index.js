const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const connectDB= require('./config/db')

connectDB()

app.use(express.json());
app.use(cors())
app.use('/api/employees',require('./routes/employeeRoutes'));

app.listen(port,()=>{
  console.log("Server Running")
})