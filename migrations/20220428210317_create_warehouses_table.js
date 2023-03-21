/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('warehouses', (table) => {
    table.uuid('id').primary();
    table.string('warehouse_name').notNullable();
    table.string('address').notNullable();
    table.string('city').notNullable();
    table.string('country').notNullable();
    table.string('contact_name').notNullable();
    table.string('contact_position').notNullable();
    table.string('contact_phone').notNullable();
    table.string('contact_email').notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('warehouses');
};
