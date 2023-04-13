const express = require('express');
const app = express();
const routes = require('./routes/routes');
const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
// const cors = require('cors');


// dotenv.config({ path: '../config/config.env' });

// app.use(cors());
app.use(express.json());
app.use('/', routes);
// app.use(bodyParser.json());
  

const PORT = process.env.PORT || 6000;

app.listen(PORT, console.log(`Listening on port ${PORT}`));