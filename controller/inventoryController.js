const knex = require('knex')(require('../knexfile'));

module.exports = {
  getAll: async (req, res) => {
    try {
      const inventories = await knex('inventories').select(
        'id',
        'warehouse_id',
        'item_name',
        'description',
        'category',
        'status',
        'quantity'
      );
      res.status(200).json(inventories);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to get inventories' });
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const inventory = await knex('inventories').select(
        'id',
        'warehouse_id',
        'item_name',
        'description',
        'category',
        'status',
        'quantity'
      ).where({ id }).first();

      if (!inventory) {
        res.status(404).json({ error: 'inventory not found' });
      } else {
        res.status(200).json(inventory);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to get inventory' });
    }
  },
  create: async (req, res) => {
    const { name, address } = req.body;
    try {
      const [id] = await knex('inventories').insert({ name, address });
      res.status(201).json({ id, name, address });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to create inventory' });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name, address } = req.body;
    try {
      const inventory = await knex('inventories').where({ id }).first();
      if (!inventory) {
        res.status(404).json({ error: 'inventory not found' });
      } else {
        await knex('inventories').where({ id }).update({ name, address });
        res.status(200).json({ id, name, address });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to update inventory' });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const inventory = await knex('inventories').where({ id }).first();
      if (!inventory) {
        res.status(404).json({ error: 'inventory not found' });
      } else {
        await knex('inventories').where({ id }).del();
        res.status(204).send();
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to delete inventory' });
    }
  },
};
