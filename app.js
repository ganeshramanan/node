const express = require('express');
const app = express();

app.get('/',(req,res) => {
res.send("Welcome to home page node 12May");
});

const port=process.env.port || 3000;

app.listen(port, () =>{
console.log("Welcome node latest message");
});




