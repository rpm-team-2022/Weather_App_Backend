exports.up = async function (knex) {
  await knex.schema.createTable("user", (tbl) => {
    // tbl.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
    tbl.increments('id')
    tbl.text("firstName").notNull();
    tbl.text("lastName").notNull();
    tbl.varchar("userName").notNull().unique();
    tbl.varchar("email").notNull().unique();
    tbl.text("password").notNull();
    tbl.timestamp('created_at').defaultTo(knex.fn.now())
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("user");
};
