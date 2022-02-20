const express = require('express');
const app = express();
const path = require('path');



// Routes//

let mainRouter = require('./routes/mainRoutes')
let productsRouter= require ('./routes/productos.js')
let usersRouter = require ('./routes/users.js')

app.use('/', usersRouter);
app.use('/', mainRouter);
app.use('/', productsRouter);
app.use('/productos', productsRouter); //va antes de la route colocada en ruta
//ejs/
app.set('view engine', 'ejs');
app.set('views', [path.join(__dirname, '/views'),
                  path.join(__dirname, '/views/products'),
                  path.join(__dirname, '/views/user')]);

// app.use(express.static('../public'));

app.use(express.static(path.join(__dirname,'../public')));

 app.listen(process.env.PORT || 3000, function() {
     console.log("Server running");
 })

// app.listen(3000, ()=>{
//     console.log('Server running');
// });


// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/views/home.html');
// });
// app.get('/login', (req,res)=>{
//     res.sendFile(__dirname + '/views/login.html');
// });
// app.get('/register', (req,res)=>{
//     res.sendFile(__dirname + '/views/register.html');
// });
// app.get('/cart', (req,res)=>{
//     res.sendFile(__dirname + '/views/cart.html');
// });
// app.get('/details', (req,res)=>{
//     res.sendFile(__dirname + '/views/details.html');
// });

module.exports = app;
