import * as express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.json({ message: 'setup node' });
});

app.listen(3333);