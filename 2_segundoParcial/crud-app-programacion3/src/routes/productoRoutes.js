const mongoose = require('mongoose');

const Producto = mongoose.model('productos');

module.exports = app => {
    
     app.get("/api/productos", async (req, res) => {
        const productos = await Producto.find({});
        res.send(productos);
    });
/* */
    app.get("/api/productos/query", async (req, res) => {

        try {
            var regExpTerm = new RegExp(req.query.term, 'i');
            var regExpSearch = [{ nombre: { $regex: regExpTerm } }, { descripcion: { $regex: regExpTerm } }, { stock: { $regex: regExpTerm } }, { precio: { $regex: regExpTerm } }];
            const productos = await Producto.find({ '$or': regExpSearch });

            res.status(200).send(productos);
        } catch (e) {
            res.status(500).send({ message: e });
        }

    });

    app.get("/api/productos/:id", async (req, res) => {

        try {
            const id = req.params.id;
            const producto = await Producto.findById(id);

            if (producto) {
                res.send(producto);
            } else {
                res.status(404).send({ message: `Producto with id '${id}' is not found.` });
            }
        } catch (e) {
            res.status(500).send({ message: `Server error.\n\n${e}` });
        }

    });

    app.post("/api/productos", async (req, res) => {

        const { nombre, descripcion, stock, precio, isDone } = req.body;

        const producto = new Producto({
            nombre,
            descripcion,
            stock,
            precio,
            isDone,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        try {
            let newProducto = await producto.save();

            res.status(201).send(newProducto);

        } catch (err) {

            if (err.nombre === 'MongoError') {
                res.status(409).send(err.message);
            }

            res.status(500).send(err);
        }

    });

    app.put("/api/productos/:id", async (req, res) => {

        const id = req.params.id;

        const productoData = req.body || {};
        delete productoData.createdAt;
        productoData.updatedAt = new Date();

        try {
            let producto = await Producto.findOneAndUpdate({ _id: id }, productoData, { new: true });

            if (!producto) {
                res.status(404).send({ message: `Error when update record with id ${id}.\n\n${e}` })
            } else {
                res.status(200).send(producto);
            }
        } catch (err) {
            if (err.nombre === 'MongoError') {
                res.status(409).send({ message: err.message });
            }
            res.status(500).send({ message: `Unknown Server Error.\n\n Unknow server error when updating producto for id='${id}'` });
        }

    });

    app.put("/api/productos/:id/approve/toggle", async (req, res) => {

        const id = req.params.id;
        
        const producto = await Producto.findOne({ _id: id });
        
        if (!producto) {
            return res.status(404).send({ message: `Error when update record with id ${id}.\n\n${e}` })
        }

        if (producto) {
            producto.isDone = !producto.isDone;
            producto.updatedAt = new Date();
            producto.save();
            res.status(200).send(producto);
        } else {
            res.status(404).send({ message: `Producto with id '${id}' is not found.` })
        }
            
    });

    app.delete("/api/productos/:id", async (req, res) => {

        const id = req.params.id;

        try {
            let producto = await Producto.findOneAndRemove({ _id: id });

            if (!producto) {
                return res.status(404).send({ message: 'Not Found Error' });
            } else {
                return res.status(204).send({ message: 'Borrado' }); // 204 do not use content
            }
        } catch (err) {
            return res.status(500).send({ message: `Producto with id '${id}' is not found.` });
        }

    });
 /* */
};
