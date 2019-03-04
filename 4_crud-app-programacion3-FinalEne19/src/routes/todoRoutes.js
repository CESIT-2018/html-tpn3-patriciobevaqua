const mongoose = require('mongoose');

const Todo = mongoose.model('todos');     // ponemos el modelo de todos en la constante Todo y vamos a usar funciones que trae la constante

module.exports = app => {
    
    app.get("/api/todos", async (req, res) => {      // busca listado completo de todos. req= request | res= response
        const todos = await Todo.find({});            //busca todos los todos con una función
        res.send(todos);
    });

    app.get("/api/todos/query", async (req, res) => {

        try {
            var regExpTerm = new RegExp(req.query.term, 'i');
            var regExpSearch = [{ name: { $regex: regExpTerm } }, { description: { $regex: regExpTerm } }];
            const todos = await Todo.find({ '$or': regExpSearch });

            res.status(200).send(todos);
        } catch (e) {
            res.status(500).send({ message: e });
        }

    });

    app.get("/api/todos/:id", async (req, res) => {     // busca por id

        try {
            const id = req.params.id;           // saca de request el parametro id
            const todo = await Todo.findById(id);  //busca en Todo por id con una función

            if (todo) {                            
                res.send(todo);
            } else {                             // si no lo encuentra indica que no lo encontró
                res.status(404).send({ message: `Todo with id '${id}' is not found.` });
            }
        } catch (e) {                            // atrapa el error para informarlo
            res.status(500).send({ message: `Server error.\n\n${e}` });
        }

    });

    app.post("/api/todos", async (req, res) => {   // método post es para crear todo

        const { name, description, isDone } = req.body;   //toma del request los datos del body

        const todo = new Todo({       //crea un objeto para guardar los datos
            name,
            description,
            isDone,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        try {
            let newTodo = await todo.save();   //guarda con la función save en el objeto

            res.status(201).send(newTodo);

        } catch (err) {

            if (err.name === 'MongoError') {
                res.status(409).send(err.message);
            }

            res.status(500).send(err);
        }

    });

    app.put("/api/todos/:id", async (req, res) => {   

        const id = req.params.id;

        const todoData = req.body || {};    //requiere el body del request o lo carga vacío
        delete todoData.createdAt;
        todoData.updatedAt = new Date();          // actualiza la fecha de creación (validar)

        try {
            let todo = await Todo.findOneAndUpdate({ _id: id }, todoData, { new: true });

            if (!todo) {
                res.status(404).send({ message: `Error when update record with id ${id}.\n\n${e}` })
            } else {
                res.status(200).send(todo);
            }
        } catch (err) {
            if (err.name === 'MongoError') {
                res.status(409).send({ message: err.message });
            }
            res.status(500).send({ message: `Unknown Server Error.\n\n Unknow server error when updating todo for id='${id}'` });
        }

    });

    app.put("/api/todos/:id/approve/toggle", async (req, res) => {

        const id = req.params.id;
        
        const todo = await Todo.findOne({ _id: id });
        
        if (!todo) {
            return res.status(404).send({ message: `Error when update record with id ${id}.\n\n${e}` })
        }

        if (todo) {
            todo.isDone = !todo.isDone;
            todo.updatedAt = new Date();
            todo.save();
            res.status(200).send(todo);
        } else {
            res.status(404).send({ message: `Todo with id '${id}' is not found.` })
        }
            
    });

    app.delete("/api/todos/:id", async (req, res) => {   //borra el todo buscándolo por id

        const id = req.params.id;     //tomm el dato del id del request

        try {
            let todo = await Todo.findOneAndRemove({ _id: id });

            if (!todo) {
                return res.status(404).send({ message: 'Not Found Error' });
            } else {
                return res.status(200).send({_id: id, message:'Removed'}); 
            }
        } catch (err) {
            return res.status(500).send({ message: `Todo with id '${id}' is not found.` });
        }

    });

};



//Todo.find({});                        para el Get de todos
//Todo.findById(id);                    para el Get por id
//todo.save()                           para el Post 
// Todo.findOneAndUpdate({ _id: id }    para el Put
// Todo.findOneAndRemove({ _id: id })   se usa en el Delete
