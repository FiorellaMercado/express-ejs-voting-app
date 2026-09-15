const express=require('express');
const app= express();
const router = require('./routes/temasRoutes');
const PORT = 3000

app.set('view engine','ejs');
//permite que express pueda leer los datos el body de una peticion
app.use(express.urlencoded({extended: true}))
app.use('/temas', router);

app.listen(PORT, () => {
    console.log(`Corriendo en http://localhost:${PORT}` )
} );




