const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

const PORT = process.env.PORT || 3001;

const app = express();












app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
