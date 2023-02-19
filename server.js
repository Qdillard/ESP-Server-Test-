const express = require('express')
const app = express()


var lightnum = 1 
var on = 8.00
var off = 20.00
var slidervalue = 80
var rMode = 1
var sMode = 1
var clouds = 0
var cIntensity = 10
var cFreq = 25


app.use(express.static("public"))

app.set('view engine', 'ejs')
app.use(logger)

//app.get('/', (req,res) => {
    //res.render("index")
//})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

//const crlRouter = require('./routes/lightcrl')
//app.use('/lightcrl',crlRouter)
//app.use('/lightcrl', lightcrlRouter)



app.get('/lightcrl', (req,res) => {
    res.send(`{\"LightNumber\": ${lightnum},\"On\":${on},\"Off\":${off},\"maxIntensity\":${slidervalue},\"rMode\":${rMode},\"sMode\":${sMode},\"Clouds\":${clouds},\"cIntensity\":${cIntensity},\"cFreq\":${cFreq}}`)
})

app.get('/slider', (req, res) => {
    res.send("Hello Slider"+ req.query.value)//read from request, express- get param,
    slidervalue = req.query.value
    console.log(req.query,slidervalue)
})
app.get('/onslider', (req, res) => {
    res.send("Hello Slider"+ req.query.value)//read from request, express- get param,
    on = req.query.value
    console.log(req.query,on)
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)

