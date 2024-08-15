const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    // REQ: Request (solicitud) - Navegador
    // RES: Response (respuesta) - Servidor
    const file = fs.readFileSync(__dirname + '/GENPLC.html');
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8'
    });
    res.end(file);

});

server.listen(8080, () => {
    console.log('Servidor corriendo en puerto http://localhost:8080')
});
