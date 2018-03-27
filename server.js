var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;
var todos = [{
        id: 1,
        description: 'Meet mom for Lunch',
        completed: false
},  {
        id: 2,
        description: 'Go to Market',
        completed: false
},  {
        id: 3,
        description: 'New Todo',
        completed: true
}];

app.get('/', function(req, res){
    res.send('TODO API Root');
});

// GET  /todos
app.get('/todos', function(req, res){
     res.json(todos);
})
// GET  /todos/:id
app.get('/todos/:id', function(req, res)
{

    var todoID = parseInt(req.params.id, 10);
    var matchedTodo;
     todos.forEach (function (todo)
     {
         if(todoID === todo.id) 
         {
             matchedTodo = todo;
         }
     });

     if (matchedTodo)
    {
         res.json(matchedTodo);

     } else
     {
         res.status(404).send();
     }
    

});

app.listen(PORT, function(){
    console.log('Express listening on port ' + PORT + '!');
});
