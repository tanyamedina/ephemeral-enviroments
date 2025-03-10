const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Configurando el entorno de desarrollo para desplegar una app y probar Ephimereral Environments proximamente. Proyecto para UDG. Tanya Medina\n');
});
server.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});
