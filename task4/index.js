const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Server request')
    res.write('Hello, USER!\n')
    res.end('Server is alive.\n');
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
