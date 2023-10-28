import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'personagens'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.text('nome').notNullable()
      table.text('titulo').notNullable()
      table.text('regiao').notNullable()
      table.text('classe').notNullable()
      // table.enu('relacionados', ['azir', 'xerath', 'atlas', 'qiyana', 'qalinna', 'ruhra', 'swain', 'darius', 'karma', 'ekko', 'singed', 'a criadora', 'le blanc', 'rell', 'briar', 'milio', 'irelia', 'jac']).notNullable()
      table.text('manifesto_titulo').notNullable()
      table.text('manifesto_corpo').notNullable()
      table.text('frase').notNullable()
      table.text('relacionado1').notNullable()
      table.text('relacionado2').notNullable()
      table.text('relacionado3').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
