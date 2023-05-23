import express from 'express';
import cors from 'cors';
import Sequelize from 'sequelize';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../swagger.json' assert { type: "json" };

const app = express();

const sequelize = new Sequelize(
 'estoaChallenge',
 'root',
 '',
  {
    host: '127.0.0.1',
    dialect: 'mysql'
  }
);

app.use(cors())

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(3000, () => console.log("Server is running"));

// app.use(routes);

sequelize.authenticate().then(() => {
    console.log('Conexão realizada com sucesso.');
 }).catch((error) => {
    console.error('Falha ao estabelecer conexão: ', error);
 });