const knex = require("knex")(require("../knexfile"));
const { v4: uuid } = require('uuid');

module.exports = {
  getAll: async (req, res) => {
    try {
      const { sort_by = 'id', order_by = 'asc' } = req.query;
      const inventories = await knex('inventories')
        .leftJoin('warehouses', 'inventories.warehouse_id', 'warehouses.id')
        .select(
          'inventories.id',
          'inventories.warehouse_id',
          'warehouses.warehouse_name as warehouse_name',
          'inventories.item_name',
          'inventories.description',
          'inventories.category',
          'inventories.status',
          'inventories.quantity'
        )
        .orderBy(sort_by, order_by);
      res.status(200).json(inventories);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Unable to get inventories" });
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const inventory = await knex('inventories')
        .leftJoin('warehouses', 'inventories.warehouse_id', 'warehouses.id')
        .select(
          'inventories.id',
          'inventories.warehouse_id',
          'warehouses.warehouse_name as warehouse_name',
          'inventories.item_name',
          'inventories.description',
          'inventories.category',
          'inventories.status',
          'inventories.quantity'
        )
        .where({ 'inventories.id': id })
        .first();
      if (!inventory) {
        res.status(404).json({ error: "Inventory not found" });
      } else {
        res.status(200).json(inventory);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Unable to get inventory" });
    }
  },
  create: (req, res) => {
    const warehouse_id = req.body.itemWarehouseId;
    const item_name = req.body.itemName;
    const description = req.body.itemDescription;
    const category = req.body.itemCategory;
    const status = req.body.itemStatus;
    const quantity = req.body.itemQuantity;

    if (!warehouse_id || !item_name || !description || !category || !status || !quantity) {
      return res.status(400).send('Please make sure to fill out all fields in the request');
    }
    const id = uuid();
    knex('inventories')
      .insert({ id, warehouse_id, item_name, description, category, status, quantity })
      .then((data) => {
        const newInventoryURL = `/inventory/${data[0]}`;
        res.status(201).location(newInventoryURL).send(newInventoryURL);
      })
      .catch((err) => res.status(400).send(`Error creating Inventory: ${err}`));
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { item_name, description, category, status, quantity, warehouse_id } =
      req.body;
    try {
      const inventory = await knex("inventories").where({ id }).first();
      if (!inventory) {
        res.status(404).json({ error: "Item not found" });
      } else {
        await knex("inventories").where({ id }).update({
          item_name,
          description,
          category,
          status,
          quantity,
          warehouse_id,
        });
        res.status(200).json({
          item_name,
          description,
          category,
          status,
          quantity,
          warehouse_id,
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Unable to update Item" });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const inventory = await knex("inventories").where({ id }).first();
      if (!inventory) {
        res.status(404).json({ error: "inventory not found" });
      } else {
        await knex("inventories").where({ id }).del();
        res.status(204).send();
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Unable to delete inventory" });
    }
  },
};
