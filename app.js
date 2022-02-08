const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/cart', (req,res)=>{
    res.sendFile(__dirname + '/views/cart.html');
});
app.get('/details', (req,res)=>{
    res.sendFile(__dirname + '/views/details.html');
});