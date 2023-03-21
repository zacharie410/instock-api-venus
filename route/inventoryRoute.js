const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// GET all inventorys
router.get('/', inventoryController.getAll);

// GET a specific inventory by id
router.get('/:id', inventoryController.getById);

// POST a new inventory
router.post('/', inventoryController.create);

// PUT/update a inventory by id
router.put('/:id', inventoryController.update);

// DELETE a inventory by id
router.delete('/:id', inventoryController.delete);

module.exports = router;