const express = require('express');
const app = express();

app.get('/',(req,res) => {
res.send("Welcome to home page node v3");
});

const port=process.env.port || 3000;

app.listen(port, () =>{
console.log("Welcome node latest message");
});




