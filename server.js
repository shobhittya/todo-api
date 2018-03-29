var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];

var todonextId = 1;

app.use(bodyParser.json());

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

// // POST /todos
app.post('/todos', function(req, res){
    var body=req.body;

    body.id = todonextId++;

    todos.push(body);console.log('Description' + body.description);
    res.json(body);
});


app.listen(PORT, function(){
    console.log('Express listening on port ' + ' ' + PORT + '!');
});
