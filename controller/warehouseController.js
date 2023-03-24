const knex = require('knex')(require('../knexfile'));
const { v4: uuid } = require('uuid');

module.exports = {
  getAll: async (req, res) => {
    try {
      const { sort_by = 'id', order_by = 'asc' } = req.query;
      const warehouses = await knex('warehouses')
        .select(
          'id',
          'warehouse_name',
          'address',
          'city',
          'country',
          'contact_name',
          'contact_position',
          'contact_phone',
          'contact_email'
        )
        .orderBy(sort_by, order_by);
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
  create: (req, res) => {
    const warehouse_name = req.body.name;
    const address = req.body.streetAddress;
    const city = req.body.city;
    const country = req.body.country;
    const contact_name = req.body.contactName;
    const contact_position = req.body.contactPosition;
    const contact_phone = req.body.contactPhoneNumber;
    const contact_email = req.body.contactEmail;

    if (!warehouse_name || !address || !city || !country || !contact_name || !contact_position || !contact_phone || !contact_email) {
      return res.status(400).send('Please make sure to fill out all fields in the request');
    }
    const id = uuid();
    knex('warehouses')
      .insert({ id, warehouse_name, address, city, country, contact_name, contact_position, contact_phone, contact_email })
      .then((data) => {
        const newWarehouseURL = `/warehouse/${data[0]}`;
        res.status(201).location(newWarehouseURL).send(newWarehouseURL);
      })
      .catch((err) => res.status(400).send(`Error creating Warehouse: ${err}`));
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { warehouse_name, address, city, country, contact_name, contact_position, contact_phone, contact_email } = req.body;
    try {
      const warehouse = await knex('warehouses').where({ id }).first();
      if (!warehouse) {
        res.status(404).json({ error: 'Warehouse not found' });
      } else {
        await knex('warehouses').where({ id }).update({ warehouse_name, address, city, country, contact_name, contact_position, contact_phone, contact_email });
        res.status(200).json({ id, warehouse_name, address, city, country, contact_name, contact_position, contact_phone, contact_email });
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
