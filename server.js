const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Hola Mundo DevOps</title></head>
      <body style="font-family:sans-serif;text-align:center;padding-top:80px">
        <h1>¡Hola Mundo desde Docker!</h1>
        <p>Jhostin Raposo Chala — ITLA</p>
        <p>Contenedor: ${require('os').hostname()}</p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, '0.0.0.0', () => console.log(`Servidor en puerto ${PORT}`));