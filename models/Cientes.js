const {Schema, model} = require('mongoose');

const ClientesSchema = Schema({
    nombre:{
        type: String,
        required:[true, "nombre es requerido"]
    },

    rol:{
        type: String,
        required:true,
        default: "USER",
        enum: ["USER", "ADMIN"]
    },

    direccion:{
        type: String,
        required:[true, "direccion es requerido"]
    },

    telefono:{
        type: Number,
        required:[true, "telefono es requerido"]
    },

    contraseña:{
        type: String,
        required:[true, "contraseña es requerido"],
        unique: true
    },

    correo:{
        type: String,
        required:[true, "correo es requerido"],
        unique: true
    },
    
})