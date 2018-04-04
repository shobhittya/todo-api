var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined,undefined, {
     'dialect': 'sqlite',
     'storage': __dirname + '/basic-sqlite.sqlite'

});

var Todo = sequelize.define('todo', {
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
             len: [1, 250]
        }
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    
    }
} )

sequelize.sync({force: true}).then(function()  {
    console.log('Everything is Synced');
});
    Todo.findById(3).then(function(todo) {
        if(todo) {
            console.log(todo.toJSON());
        } else {
            console.log('Todo not Found');
        }
    });



    //     Todo.create({
//         description: 'Tak out Trash',
//         completed: false
//     }).then(function(todo) {
//        return Todo.create({
//            description: 'Clean Office',
//        });
//     }).then(function(){
//         //return Todo.findById(1)
//         return Todo.findAll({
//             where: {
//                 description: {
//                     $like : '%Office%'
//                 }
//             }
//         });
//     }).then(function(todos){
//         if(todos) {
//             todos.forEach(function(todo) {  
//             console.log(todo.toJSON());
//             });   
//         }else {
//             console.log('NO TODO FOUND');
//         }
 
//     }).catch(function(e) {
//         console.log(e);
//     });
// });
