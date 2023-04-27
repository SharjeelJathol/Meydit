# Meydit
 Pre-Interview Selection Task for Full Stack Developer (Intern) for Meydit

# First name, last name, email address, address, postcode, state, clothing type(Dress, Ethnic Wear, Sari/Blouse), sample images, description, budget(optional)
# see all jobs
# filter by location
# filter by clothing type
# see total quotes count
# able to quote an offer

# clothing type, quotes count, location, status
# Open a specific job
# quote a price with optional comment and then notify the customer nby email in the backend




# npx tsc --init to nitialize with tsconfig.json file
# add "build": "tsc" in scripts in package.json file
# wriet your typescript code, then run npm build which will create the js files in your designated folder
# After that node your server on that folder
# ts-node to build the ts and run it's js version
# ts-node-dev works same as nodemon i.e. ts-node-dev --respawn src/index.ts == nodemon --exec ts-node src/index.tx
# @types module to define types i.e. npm i @types/node or @types/express
# for others create @types folder inside src in which create type_id_name.d.ts where write declare module "type_id_name";
# req.name gives error then go for casting by using (req as any).name  or (req: any)={}
