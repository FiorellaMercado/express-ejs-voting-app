// importar el paquete express y guardar en la cosntante express
const express = require('express');

//ejecutar express, crea la aplicacion de express y guarda en la constante app
const app = express();

// establecemos el puerto
const PORT = 3000;

// utlizamos ejs como moto para generar las vistas html
//.set() configuracion
app.set('view engine', 'ejs')

// ruta 
//req request
// res response
app.get('/', (req, res) => {
// renderiza index.ejs y pásale un dato llamado mensaje
    res.render('index',{mensaje: 'Hola mundo'});
});

//escucha las peticiones que llegan a este puerto
app.listen(PORT, ()=> {
//mensaje de confirmación
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



