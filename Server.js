const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/ToDoRoute')

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(
    cors({
      origin: ["http://localhost:3000", "https://todo-frontend1.vercel.app"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
      headers: ["Authorization", "Content-Type"],
    })
  );

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log('Connected to MongoDB...'))
.catch((err)=>console.log(err))

app.use(routes)


app.listen(PORT,()=>console.log(`Listening on: ${PORT}`))