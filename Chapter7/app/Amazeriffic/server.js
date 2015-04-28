var express = require("express"),
    mongoose = require("mongoose"),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server);

app.use(express.static(__dirname + "/client"));
//app.use(express.bodyParser());

// connect to the amazeriffic data store in mongo
mongoose.connect('mongodb://localhost/amazeriffic');

// This is our mongoose model for todos
var ToDoSchema = mongoose.Schema({
    description: String,
    tags: [String]
});

var ToDo = mongoose.model("ToDo", ToDoSchema);

server.listen(3000);

app.get("/todos.json", function(req, res) {
    console.log("req from" + req)
    ToDo.find({}, function(err, toDos) {
        if (err !== null) {
            res.json(toDos);
        }
    });
});

io.on('connection', function(socket) {
    socket.on('send_new_todo', function(msg) {
        //console.log("Message description server side :"+msg.description);
        //console.log("Message tags server side :"+msg.tags);
        var newToDo = new ToDo({
            "description": msg.description,
            "tags": msg.tags
        });
        newToDo.save(function(err, result) {
            if (err !== null) {
                // the element did not get saved!
                console.log(err);
                //res.send("ERROR");
            } else {
                console.log(result);
                // our client expects *all* of the todo items to be returned, so we'll do
                // an additional request to maintain compatibility
                ToDo.find({}, function(err, result) {
                    if (err !== null) {
                        // the element did not get saved!
                        //res.send("ERROR");
                    }
                    io.emit('send_new_todo', result);
                    //res.json(result);
                });
            }
        });
    });
});