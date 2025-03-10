const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // Cambiamos a HTML

    res.end(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Mi Aplicación</title>
        <style>
            body {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                margin: 0;
                font-family: sans-serif;
            }
            .text-container { /* contenedor para el texto */
                text-align: center; /* centrado horizontal */
            }
            .blue-text {
                color: blue;
            }
            .pink-text {
                color: pink;
            }
            .green-text {
                color: green;
            }
        </style>
    </head>
    <body>
        <div class="text-container">
            <p class="blue-text">Configurando el entorno de desarrollo para desplegar una app y probar Ephemeral Environments proximamente.</p>
            <p class="pink-text">Proyecto para UDG.</p>
            <p class="green-text">Tanya Medina</p>
        </div>
    </body>
    </html>
    `);
});

server.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});