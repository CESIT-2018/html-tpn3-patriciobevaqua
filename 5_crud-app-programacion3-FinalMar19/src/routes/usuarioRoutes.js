const mongoose = require('mongoose');    //acá definimos las rutas de cómo va a estar exponiendo la api la información

const Usuario = mongoose.model('usuarios'); //acá vinculamos el modelo Usuario

module.exports = app => {
    
    app.get("/api/usuarios", async (req, res) => {
        const usuarios = await Usuario.find({});
        res.send(usuarios);
    });


    app.post("/api/usuarios", async (req, res) => { 

        const { nombreUser, apellidoUser, emailUser, clave } = req.body;   

        const usuario = new Usuario({
            nombreUser,
            apellidoUser,
            emailUser,
            clave,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        try {
            let newUsuario = await usuario.save();

            res.status(201).send(newUsuario);

        } catch (err) {

            if (err.name === 'MongoError') {
                res.status(409).send(err.message);
            }

            res.status(500).send(err);
        }

    });

   /* app.get("/api/contactos/query", async (req, res) => {

        try {
            var regExpTerm = new RegExp(req.query.term, 'i');
            var regExpSearch = [{ name: { $regex: regExpTerm } }, { description: { $regex: regExpTerm } }];
            const contactos = await Contacto.find({ '$or': regExpSearch });

            res.status(200).send(contactos);
        } catch (e) {
            res.status(500).send({ message: e });
        }

    });

    app.get("/api/contactos/:id", async (req, res) => {

        try {
            const id = req.params.id;
            const contacto = await Contacto.findById(id);

            if (contacto) {
                res.send(contacto);
            } else {
                res.status(404).send({ message: `Contacto with id '${id}' is not found.` });
            }
        } catch (e) {
            res.status(500).send({ message: `Server error.\n\n${e}` });
        }

    });*/

  

    /*app.put("/api/contactos/:id", async (req, res) => {

        const id = req.params.id;

        const contactoData = req.body || {};
        delete contactoData.createdAt;
        contactoData.updatedAt = new Date();

        try {
            let contacto = await Contacto.findOneAndUpdate({ _id: id }, contactoData, { new: true });

            if (!contacto) {
                res.status(404).send({ message: `Error when update record with id ${id}.\n\n${e}` })
            } else {
                res.status(200).send(contacto);
            }
        } catch (err) {
            if (err.name === 'MongoError') {
                res.status(409).send({ message: err.message });
            }
            res.status(500).send({ message: `Unknown Server Error.\n\n Unknow server error when updating contacto for id='${id}'` });
        }

    });

    app.put("/api/contactos/:id/approve/toggle", async (req, res) => {

        const id = req.params.id;
        
        const contacto = await Contacto.findOne({ _id: id });
        
        if (!contacto) {
            return res.status(404).send({ message: `Error when update record with id ${id}.\n\n${e}` })
        }

        if (contacto) {
            contacto.isDone = !contacto.isDone;
            contacto.updatedAt = new Date();
            contacto.save();
            res.status(200).send(contacto);
        } else {
            res.status(404).send({ message: `Contacto with id '${id}' is not found.` })
        }
            
    });

    app.delete("/api/contactos/:id", async (req, res) => {

        const id = req.params.id;

        try {
            let contacto = await Contacto.findOneAndRemove({ _id: id });

            if (!contacto) {
                return res.status(404).send({ message: 'Not Found Error' });
            } else {
                return res.status(200).send({_id: id, message:'Removed'}); 
            }
        } catch (err) {
            return res.status(500).send({ message: `Contacto with id '${id}' is not found.` });
        }

    });*/

};
