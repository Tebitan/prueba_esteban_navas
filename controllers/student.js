const { request, response } = require('express');
const Student = require('../models/student');

const getStudentsBycurse = async(req = request, res = response) => {
    try {
        const course = req.params.id;
        const lstStudents = await Student.find({ course });
        if (lstStudents.length > 0) {
            res.json(lstStudents);
        } else {
            res.status(404).json({
                Descripcion: 'Not data found'
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
}


module.exports = {
    getStudentsBycurse
}