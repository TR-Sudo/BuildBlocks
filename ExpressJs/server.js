const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
    //res.status(500).send('Hello!')
    //res.status(200).json({Message:'Hello!'})
    //res.download('server.js')
    res.render('index', {title: 'My Express App', message: 'Hello!'})
});





const userRouter=require('./routes/users')
app.use('/users',userRouter)

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}
// returns /users/2 the url

app.listen(port)