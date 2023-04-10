// Import Express.js
const express = require('express');
// Import our modular routers for /apiRoutes and /htmlRoutes
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');
// The Ports the Express.js server will run public and server side
const PORT = process.env.PORT || 3001;
// Initialize an instance of Express.js
const app = express();
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',apiRoutes);
app.use('/',htmlRoutes);
app.use(express.static('public'));


// listen() method is responsible for listening for incoming connections on the specified por
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
