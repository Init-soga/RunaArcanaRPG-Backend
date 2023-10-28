import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Personagen from 'App/Models/Personagen'

export default class PersonagensController {
  public async index({ }: HttpContextContract) {
    const items = await Personagen.all()

    return items
  }

  // public async create({ }: HttpContextContract) { }

  public async store({ request }: HttpContextContract) {

    const objetoPersonagem = request.all()

    const personagem = await Personagen.create(objetoPersonagem)

    return `O personagem ${personagem.nome} foi criado com sucesso no ID ${personagem.id}`

  }

  public async show({ params }: HttpContextContract) {
    const personagem = await Personagen.findOrFail(params.id)

    return personagem;
  }

  // public async edit({ }: HttpContextContract) { }

  // public async update({ }: HttpContextContract) { }

  public async destroy({ params }: HttpContextContract) {

    const personagem = await Personagen.findOrFail(params.id)

    await personagem.delete();

    return "Personagem deletado";

  }
}

module.exports = PersonagensController