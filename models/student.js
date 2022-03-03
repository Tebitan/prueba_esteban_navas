const { Schema, model } = require('mongoose');

const StudentSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    lastname: {
        type: String,
        required: [true, 'El apellido es obligatorio']

    },
    course: {
        type: String,
        required: [true, 'El curso es obligatorio']
    },
    score: {
        type: Number,
        required: [true, 'La calificacion es obligatorio']
    },
    date: {
        type: Date,
        default: Date.now
    }

});

/**
 * Sobrescribimos la funcion toJSON 
 * Para eliminar atributos que no queremos mostrar 
 * por EJ: password
 */

StudentSchema.methods.toJSON = function() {
    const { __v, course, date, _id, ...student } = this.toObject();
    return student;
};



module.exports = model('Student', StudentSchema);