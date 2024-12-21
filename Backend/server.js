const http = require('http');
const app = require('./app');
const port = process.env.PORT || 5000;
// const port = process.env.PORT || 4001;
// const port = 3001;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})