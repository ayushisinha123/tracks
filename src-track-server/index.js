require('./models/User')
require('./models/Track')
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require("./routes/authRoutes")
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require("./middlewares/requireAuth")


const app = express();
app.use(bodyParser.json())
app.use(routes)
app.use(trackRoutes)


const mongoUri = "mongodb+srv://ayushiraj2313:Ayu7896@cluster0.3e6stgq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log('Connected to mongoose instance')
})
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongoose instance', err)
})
app.get('/', requireAuth,(req, res) => {
    res.send(`Your email: ${req.user.email}`)
});

app.listen(3000, () => {
    console.log('Listening to port 3000')
});