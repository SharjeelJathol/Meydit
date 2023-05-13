# Meydit
 Pre-Interview Selection Task for Full Stack Developer (Intern) for Meydit

#               Customer Requirements
# First name, last name, email address, address, postcode, state, clothing type(Dress, Ethnic Wear, Sari/Blouse), sample images, description, budget(optional)
# see all jobs
# filter by location
# filter by clothing type
# see total quotes count
# able to quote an offer

#               Maker Requirements
# clothing type, quotes count, location, status
# Open a specific job
# quote a price with optional comment and then notify the customer by email in the backend



#               TYPESCRIPT
# npx tsc --init to nitialize with tsconfig.json file
# add "build": "tsc" in scripts in package.json file
# wriet your typescript code, then run npm build which will create the js files in your designated folder
# After that node your server on that folder
# ts-node to build the ts and run it's js version
# ts-node-dev works same as nodemon i.e. ts-node-dev --respawn src/index.ts == nodemon --exec ts-node src/index.tx
# @types module to define types i.e. npm i @types/node or @types/express
# for others create @types folder inside src in which create type_id_name.d.ts where write declare module "type_id_name";
# req.name gives error then go for casting by using (req as any).name  or (req: any)={}


#               LUCID
# npm i @adonisjs/lucid@alpha -- install this package as lucid
# node ace invoke @adonisjs/lucid --invoke the lucid to configure your project according to a sleected database, then follow the steps provided by lucid which includes copying the environment variables in the configuration setting in env.ts file and then replacing the dummy values with actual values in .env config file


#               MIGRATIONS
# node ace make:migration filename tablename --creates a new file inside migrations folder by the name of it's ID appended by the filename we provide, provided that we have provided that name. Otherwise it just append the tablename with that ID.
# node ace run:migration --run all the files inside the migrations folder in database directory
# Database history or tables manipulation i.e. creating, altering tables, columns.
# for this purpose we will use knex npm i knex
# what it does is, it goes to the migrations folder inside database and then run all of the files inside that folder which actually represents a diffferent table altogether. Along with that, Lucid creates a table separate to these in the same databse, where it logs the files' data which it has executed already so that when we again run the command node ace migraton:run, it first tally the information from that table with the files and then only execute those files which are not logged into that lucid table which are actually new tables' files.
# node ace migration:rollback is use to rollback the migrations in the last cycle. If you wan to rollback to any further then you have to mention the batch till you want to rolllback i.e. 0 to rollback all migrations node ace migration:rollback --batch 0
# up() is executed when migration:run is called
# down() is executed when migration:rollback is called
# For alterating the table, it is better to make new migraion table and make changes in that table to make sure it run the later table command on the desired table within that databse. 



#               MODEL
# Works as a wraparound the table containing all the essential features/function related to or uppon that table i.e. transactions, CRUD operations, checks, multiple queries, stored procedures etc
# instead of uuid as datatype you have to set public static selfAssignPrimaryKey = true so that primary key is assigned on its own
# node ace make:model samples -m



#               SEEDER
# used to pre populate the database tables with static information

#               ROLES


#               Postgres
# in up() you actually create the tables you're going to use later or apply CRUD operations to
# in down() you delete the table that you created previously




#               AWS
# Eventhough name of the databse was something else, had to write postgres in the connection config variables
# root user don't use sudo at start, others do
# if ssh command is not recognzable by your OS then use GITBASH 
# sudo -i to login as a root user
# cat /etc/os-release for details of the ec2 ubuntu instance
# apt-get update
# df -h for resources of ec2 ubuntu instance
# ip -a
# apt-get install nginx to install nginx on the server
# service nginx status to activate nginx
# nginx -t to know if nginx is installed or not
# curl localhost serve index file from the root to address /var/www/html/
# echo "data"> index.txt to add data into file
# curl to output the file on console



#               CONTRACTS
# This folder probably contains the datatypes which we define to use and are not part of the language resulting in not being recognized by Typescript.
# const taskDatabse=await Database.from('Job').where('id', 1).select('*')
# const taskModel=await Job.query().where('id', 1).select('*')


#               ROUTE
# Route.resource('name',  'NameController') rather than Route.group(()=>{
#    Route.get('/', 'name.show').as('show')
#    Route.get('/:id', 'name.index').as('index')
#    Route.post('/', 'name.alter').as('alter')
# })
# Default routes for Route.resource()
# GET|HEAD     /jobs ──────────────────────────────────────────────────────────────────────────── jobs.index › JobController.index
# GET|HEAD     /jobs/create ─────────────────────────────────────────────────────────────────── jobs.create › JobController.create
# POST         /jobs ──────────────────────────────────────────────────────────────────────────── jobs.store › JobController.store
# GET|HEAD     /jobs/:id ────────────────────────────────────────────────────────────────────────── jobs.show › JobController.show
# GET|HEAD     /jobs/:id/edit ───────────────────────────────────────────────────────────────────── jobs.edit › JobController.edit
# PUT|PATCH    /jobs/:id ────────────────────────────────────────────────────────────────────── jobs.update › JobController.update
# DELETE       /jobs/:id ──────────────────────────────────────────────────────────────────── jobs.destroy › JobController.destroy

#               CONTROLLER
# # node ace make:model samples -c for only controller
# # node ace make:model samples -mc for model along with its controller
#
#
#


#               SERVER
# node ace serve --watch --to start auto restarting
# screen -d -m node ace serve to keep the ap always running

#               ERROOOOR
# insert into "samples" ("file", "job_id") values ($1, $2) returning "id" - column "id" does not exist
# This upper error won't let you do anything and wants your to create a id column whether you need that or not, but it is good in a way that according to good practices you should never let any table have no primary key. So, this just makes sure of that.


#                MATERAL UI
# https://mui.com/system/spacing/ essential for spacings just like bootstrap. Slowing becoming more interesting
#
#


class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public title: number

  public get ownedByCurrentUser() {
    if (!this.$sideloaded) {
      return false
    }
    return this.$sideloaded.userId = this.userId
  }
}

class User extends BaseModel {
  @column()
  public id: number

  @hasMany(() => Post, {
    foreignKey: 'userId', // userId column on "Post" model
  })
  public posts: HasMany<typeof Post>
}