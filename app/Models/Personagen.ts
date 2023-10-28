import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Personagen extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public titulo: string

  @column()
  public regiao: string

  @column()
  public classe: string

  @column()
  public relacionado1: string

  @column()
  public relacionado2: string

  @column()
  public relacionado3: string

  @column()
  public manifesto_titulo: string

  @column()
  public manifesto_corpo: string

  @column()
  public frase: string
}

//nome titulo regiao classe campeosrelacionados manifestotitulo manifestocorpo 