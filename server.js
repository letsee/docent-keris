let http = require('http');
let path = require('path');
let express = require('express');
// let bodyParser = require('body-parser');
let cors = require('cors');

/**
 * Port Setting Function
 */
const normalizePort = (val) => {
  // valì€ 10ì§„ìˆ˜ë¡œ parsedê°’ìž„.
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
 * ë§ˆì§€ë§‰ìœ¼ë¡œ ì •ì˜ ëœ index.htmlì— ëŒ€í•œ ê²½ë¡œë¥¼ ì €ìž¥í•˜ì—¬ ìºì‹±
 * ì•„ëž˜ ì½”ë“œê°€ ìžˆì–´ì•¼ refreshì—ì„œ ë™ìž‘í• ìˆ˜ ìžˆìŒ.
 */
app.get('/docent', (req, res) => {
  res.sendFile(path.resolve(__dirname ,'index.html'));
});

/**
 * Httpë¡œ í•´ë‹¹ index.htmlì„ ì„œë¹„ìŠ¤
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 * ë„¤íŠ¸ì›Œí¬ ì¸í„°íŽ˜ì´ìŠ¤ì—ì„œ ì œê³µëœ í¬íŠ¸ë¥¼ listening í•¨.
 */
server.listen(port);

/**
 * Event listener for HTTP server "error" event.
 * HTTP ì„œë²„ì—ì„œ 'error'ì´ë²¤íŠ¸ë¥¼ listening
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
 * HTTP ì„œë²„ì—ì„œ 'listening' ì´ë²¤íŠ¸ë¥¼ listening
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
