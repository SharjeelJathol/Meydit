import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SamplesController {
  public async index(ctx: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show(ctx: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
