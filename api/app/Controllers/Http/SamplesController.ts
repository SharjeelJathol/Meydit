import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SamplesController {
  public async index(ctx: HttpContextContract) {}
  // return the file whose name is in the url id parameter
  public async index(ctx: HttpContextContract) {
    const fileName=ctx.request.params().id
    const readableStream = await Drive.getStream(fileName)
    ctx.response.stream(readableStream)
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show(ctx: HttpContextContract) {}
  public async show(ctx: HttpContextContract) {
    const samples=await Sample.query().where('job_id', ctx.request.params().id)
    return ctx.response.json({ samples })
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
