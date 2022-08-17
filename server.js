
const express = require('express');
const mongoose = require('mongoose')
const Bakery = require('./models/bakery')
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3003;
const methodOverride = require('method-override')


//DB connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo')})


app.use(express.urlencoded({extended:false}))


// FOR CSS USE
app.use(express.static('public'));


// setting up our views
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use((req,res,next) => {
console.log('I run for all routes')
next()
})
app.use(methodOverride('_method'))

//HOME PAGE
app.get('/',(req,res)=>{
    res.render('Intro')
})

//INDEX PAGE

app.get('/bakery/', (req,res)=>{
Bakery.find({}, (error, allBakery)=>{
    res.render('Index',{
        bakery: allBakery
    })
})
})


app.get('/bakery/new', (req,res)=>{
    res.render('New')
})

app.listen(port,() => {
    console.log('I am listening on port' , port);
}); 
