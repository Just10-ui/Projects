import express from 'express';
import dotenv from 'dotenv';
import router from '../router/router.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use('/', router);

const server = app.listen(port, () => {
  console.log(`PORT running on port http://localhost:${port}`);
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server exits');
    process.exit(0);
  });
});