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

    await Personagen.create(objetoPersonagem)

    return 'success'

  }

  // public async show({ }: HttpContextContract) { }

  // public async edit({ }: HttpContextContract) { }

  // public async update({ }: HttpContextContract) { }

  // public async destroy({ }: HttpContextContract) { }
}

module.exports = PersonagensController