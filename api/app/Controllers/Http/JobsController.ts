import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Job from 'App/Models/Job'
import Jobs from 'Database/migrations/1682617018790_create_jobs_tables'

export default class JobsController {
  public async index(ctx: HttpContextContract) {
    // const taskDatabse=await Database.from('Job').where('id', 1).select('*')
    // const taskModel=await Job.query().where('id', 1).select('*')
  }

  public async create({}: HttpContextContract) {}

  public async store(ctx: HttpContextContract) {
    const job=new Job()
  }

  public async show(ctx: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
