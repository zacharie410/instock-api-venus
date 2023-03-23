const knex = require('knex')(require('../knexfile'));

module.exports = {
  getAll: async (req, res) => {
    try {
      const warehouses = await knex('warehouses').select(
        'id',
        'warehouse_name',
        'address',
        'city',
        'country',
        'contact_name',
        'contact_position',
        'contact_phone',
        'contact_email'
      );
      
      res.status(200).json(warehouses);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to get warehouses' });
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const warehouse = await knex('warehouses').select(
        'id',
        'warehouse_name',
        'address',
        'city',
        'country',
        'contact_name',
        'contact_position',
        'contact_phone',
        'contact_email'
      ).where({ id }).first();
      if (!warehouse) {
        res.status(404).json({ error: 'Warehouse not found' });
      } else {
        res.status(200).json(warehouse);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to get warehouse' });
    }
  },
  create: async (req, res) => {
    const { name, address } = req.body;
    try {
      const [id] = await knex('warehouses').insert({ name, address });
      res.status(201).json({ id, name, address });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to create warehouse' });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name, address } = req.body;
    try {
      const warehouse = await knex('warehouses').where({ id }).first();
      if (!warehouse) {
        res.status(404).json({ error: 'Warehouse not found' });
      } else {
        await knex('warehouses').where({ id }).update({ name, address });
        res.status(200).json({ id, name, address });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to update warehouse' });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const warehouse = await knex('warehouses').where({ id }).first();
      if (!warehouse) {
        res.status(404).json({ error: 'Warehouse not found' });
      } else {
        await knex('warehouses').where({ id }).del();
        res.status(204).send();
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to delete warehouse' });
    }
  },
};
