import config from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../docs/swagger.json';

config.config();
const app = express();
const { PORT = 8000 } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (_req, res) => {
  res.status(200).send({
    message: 'Welcome to PamojaTech APIs'
  });
});

const server = app.listen(PORT, () => console.log(`The server is running on PORT ${PORT}`));

export default server;
