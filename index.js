const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(cors());
app.use(express.json());
// require
const warehouseRoute = require('./route/warehouseRoute');
const inventoryRoute = require('./route/inventoryRoute');
// all warehouses routes
app.use('/warehouse', warehouseRoute);
app.use('/inventory', inventoryRoute);


app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
