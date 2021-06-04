const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'password',
    database : 'dummy_catalog_next'
  }
});


function runQuery(){
        //Run Queries and send Content
       return  knex.select().table('users').then()
}

// // const result = knex.select("*").from("users").first()
// const result = knex('users').first()
// rows = result.then(function(rows){
//             return rows;
//         })
// console.log(rows)


runQuery().then(knexres=>{
      
         console.log(knexres);
      
      });