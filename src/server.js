const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'estoaChallenge',
 'root',
 '',
  {
    host: '127.0.0.1',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
    console.log('Conexão realiada com sucesso.');
 }).catch((error) => {
    console.error('Falha ao estabelecer conexão: ', error);
 });
