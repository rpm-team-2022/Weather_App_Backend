exports.up = async function (knex) {
    await knex.schema.createTable("userHistory", (tbl) => {
        tbl.increments('id')
        tbl.text("country")
        tbl.text("region")
        tbl.text("city_name")
        tbl.text("local_time")
        tbl.text("condition_text")
        tbl.text("feels_like")
        tbl.text("gust_mph")
        tbl.text("temp_f")
        tbl.text("wind_dir")
        tbl.text("wind_mph")
        tbl.text("humidity")
        tbl.text("preciptation")
        tbl
            .integer("user_id")
            .unsigned()
            .notNull()
            .references("id")
            .inTable("user")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("userHistory");
};
