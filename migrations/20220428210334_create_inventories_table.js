/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('inventories', (table) => {
    table.uuid('id').primary();
    table
      .uuid('warehouse_id')
      .references('warehouses.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('item_name').notNullable();
    table.string('description').notNullable();
    table.string('category').notNullable();
    table.string('status').notNullable();
    table.integer('quantity').notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('inventories');
};
