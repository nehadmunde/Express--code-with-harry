const express=require('express');
const path  = require('path');
const app=express();
const port=3300;

const harryMiddleware=(req,res,next)=>{
    console.log(req);
    next()
}

app.use(express.static(path.join(__dirname,"public")))
//app.use(harryMiddleware)// to run middleware

app.get('/hello/:name',(req,res)=>{
    res.send('<h1>Hello World</h1>' + req.params.name);
})


app.get('/about',(req,res)=>{
    //res.send('<h1>About Page</h1>');
     // res.sendFile(path.join(__dirname,'index.html'));
     res.json({'harry':34,'neha':30});

})

app.get('/contact',(req,res)=>{
    res.send('<h1>Contact Page</h1>');
})

app.listen(port,()=>{
    console.log(`This app listening at http://localhost:${port}`);
})

