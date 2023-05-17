
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/router.js';

const app = express()

const URL_MDB = 'mongodb+srv://User_first:User_first@cluster0.fezer9l.mongodb.net/?retryWrites=true&w=majority'

const port = 5500

app.use(express.json())
app.use('/api',router)


async function startMyapp () {
  try {
    await mongoose.connect(URL_MDB)
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    }) 
  } catch (e) {
    console.log (e)
  }
}

startMyapp()
