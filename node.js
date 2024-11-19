const express = require("express");
const   app = express();


app.get("/sum", (req,res) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let sum =  a + b;

    res.json({sum: sum});
})

app.get("/si", (req,res) => {
    // simpleinterest(si) = (principle(p)*rate(r)*time(t))/100
    let p = Number(req.query.p)
    let r = Number(req.query.r)
    let t = Number(req.query.t)

    let simpleinterest = (p*r*t)/100;
    let total = p+simpleinterest; 

    res.json({
        SimpleInterest: simpleinterest,
        Total: total
    })
})


app.listen(3001);