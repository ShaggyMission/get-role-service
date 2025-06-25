const express = require('express');
require('dotenv').config();
const sequelize = require('./config/database');
const roleRoutes = require('./routes/roleRoutes');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/swagger.yml');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/roles', roleRoutes);
app.use('/roles/getrol-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
