const express = require('express');
const connection = require('./config/connection.js');
const routes = require('./routes');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const init = async () => {
  try {
    await connection.sync({ force: false });
    // every connection dont drop the tables, just refresh connection. async op
    console.log('[INFO]: DB connection successful');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT} 🚀 🌕`);
    });
  } catch (err) {
    console.log(`[ERROR]: DB connection failed | ${err.message}`);
  }
};

init();
