import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Quotes extends BaseSchema {
  protected tableName = 'quotes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('price').unsigned().notNullable();
      table.uuid('job_id').references('id').inTable('jobs');
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
