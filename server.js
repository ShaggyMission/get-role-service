const express = require('express');
require('dotenv').config();
const sequelize = require('./config/database');
const roleRoutes = require('./routes/roleRoutes');

const app = express();

app.use(express.json());
app.use('/roles', roleRoutes);

const PORT = process.env.PORT || 3003;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`Role Service running on port ${PORT}`);
  } catch (err) {
    console.error('DB connection error:', err);
  }
});
