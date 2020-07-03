let http = require('http');
let path = require('path');
let express = require('express');
// let bodyParser = require('body-parser');
let cors = require('cors');

/**
 * Port Setting Function
 */
const normalizePort = (val) => {
  // val은 10진수로 parsed값임.
  const parsed = parseInt(val, 10);
  if (isNaN(parsed)) {
    // named pipe
    return val;
  }

  if (parsed >= 0) {
    // port number
    return parsed;
  }
};

const port = normalizePort(process.env.PORT || '5001');
const app = express();
app.set('port', port);
app.use(cors());
app.use('/docent', express.static(path.join(__dirname, '.')));
// app.use(bodyParser.json());
/**
 * final catch-all route to index.html defined last
 * 마지막으로 정의 된 index.html에 대한 경로를 저장하여 캐싱
 * 아래 코드가 있어야 refresh에서 동작할수 있음.
 */
app.get('/docent', (req, res) => {
  res.sendFile(path.resolve(__dirname ,'index.html'));
});

/**
 * Http로 해당 index.html을 서비스
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 * 네트워크 인터페이스에서 제공된 포트를 listening 함.
 */
server.listen(port);

/**
 * Event listener for HTTP server "error" event.
 * HTTP 서버에서 'error'이벤트를 listening
 */
const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
      ? `Pipe ${port}`
      : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};
server.on('error', onError);

/**
 * Event listener for HTTP server "listening" event.
 * HTTP 서버에서 'listening' 이벤트를 listening
 */
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
      ? `pipe ${addr}`
      : `port ${addr.port}`;
  // debug(`Listening on ${bind}`);

  console.log(`Listening on ${bind}`);
};

server.on('listening', onListening);

