# hapiapp
Simple hapijs app

https://university.mongodb.com/courses/catalog
http://hapijs.com

npm init
yarn add hapi
node app
npm i -g nodemon
nodemon // <--- to run server

yarn add inert - Static file and directory handlers plugin for hapi.js.
// Static file and directory handlers plugin for hapi.js.
https://github.com/hapijs/inert

yarn add vision
yarn add handlebars
yarn add mongoose

https://mongoosejs.com/

===
brew services start mongodb
mongo

show dbs
use hapidb
db.createCollection('tasks');
db.tasks.insert({text: 'My Task One'});
db.tasks.find()
db.tasks.find().pretty()
