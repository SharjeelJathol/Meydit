/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

// Destructuring can also be used by {request, response, params etc} : HttpContextContract
// Route.group(()=>{Routes}).prefix('common_route') be used for grouping of multple routes, all started with the same initials. Same as Route in Express.js 
// Route().as("alias") to 
Route.post("/consumer/:id",async (ctx:HttpContextContract) => {
  // This will take a request of new job form the user and insert that in the database, later to be used.
})

Route.get("/jobs/:id",async (ctx:HttpContextContract) => {
  // Thi route ill be used to send all the related information of a specific job defined in the id parameter.
})
// Or we can use /jobs/:id? which will make id parameter as option, rather than a compulsion
Route.get("/jobs",async (ctx:HttpContextContract) => {
  // This route will return all the jobs available but considering the query parameter named page as a pagination tool for itself. along with that it will use query parameters and see if they contain any value then apply those values as a filter on the result and then apply pagination. After that our result is ready to be transfered and response will be sent.
})

Route.post("/maker/quote",async (ctx:HttpContextContract) => {
  // This route will be used for the maker to quote on the selected job.
})