const http = require('http');
const os = require('os');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Bienvenido a la API de Distribuciones Mediterráneo S.L. - Administrador: Yon López Gutiérrez\n');
    } else if (req.url === '/estado') {
        const estado = {
            servicio: "API Node.js",
            hostname: os.hostname(),
            uptime_segundos: Math.floor(process.uptime()),
            fecha: new Date().toISOString()
        };
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(estado, null, 2) + '\n');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Ruta no encontrada\n');
    }
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor API Node escuchando en el puerto ${PORT}`);
});
