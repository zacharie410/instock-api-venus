const knex = require('knex')(require('../knexfile'));
const { v4: uuid } = require('uuid');

module.exports = {
  getAll: async (req, res) => {
    try {
      const warehouses = await knex('warehouses');
      res.status(200).json(warehouses);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to get warehouses' });
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const warehouse = await knex('warehouses').where({ id }).first();
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
  create: (req, res) => {
    const { name, 
            streetAddress, 
            city, 
            country, 
            contactName, 
            contactPosition, 
            contactPhoneNumber, 
            contactEmail } = req.body;
    if (!name || !streetAddress || !city || !country || !contactName || !contactPosition || !contactPhoneNumber || !contactEmail) {
      return res.status(400).send('Please make sure to fill out all fields in the request');
    }
    const id = uuid();
    knex('warehouses')
      .insert({ id, name, streetAddress, city, country, contactName, contactPosition, contactPhoneNumber, contactEmail })
      .then((data) => {
        const newWarehouseURL = `/warehouse/${data[0]}`;
        res.status(201).location(newWarehouseURL).send(newWarehouseURL);
      })
      .catch((err) => res.status(400).send(`Error creating Warehouse: ${err}`));
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
