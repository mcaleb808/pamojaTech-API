import config from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../docs/swagger.json';
import officialInfoRoutes from './v1/routes/officialInfo';
import twitterInfoRoutes from './v1/routes/tweetsInfo';

config.config();
const app = express();
const { PORT = 8000 } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/schools', officialInfoRoutes);
app.use('/api/v1/tweets', twitterInfoRoutes);

app.get('/api/v1', (_req, res) => {
  res.status(200).send({
    message: 'Welcome to PamojaTech APIs'
  });
});

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const server = app.listen(PORT, () => console.log(`The server is running on PORT ${PORT}`));

export default server;
