const express = require('express');
const router = express.Router();
const warehouseController = require('../controller/warehouseController');

// GET all warehouses
router.get('/', warehouseController.getAll);

// GET a specific warehouse by id
router.get('/:id', warehouseController.getById);

// POST a new warehouse
router.route('/').post(warehouseController.create);

// PUT/update a warehouse by id
router.put('/:id', warehouseController.update);

// DELETE a warehouse by id
router.delete('/:id', warehouseController.delete);

module.exports = router;