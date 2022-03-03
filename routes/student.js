const { Router } = require('express');
const { check } = require('express-validator');
const { getStudentsBycurse } = require('../controllers/student');
const { validarCampos } = require('../middlewares/validarCampos');

const route = Router();

route.get('/' + process.env.OPERATION_GETCOURSE + '/', [check('id', 'Nombre del curso es Obligatorio').not().isEmpty(), validarCampos]);
route.get('/' + process.env.OPERATION_GETCOURSE + '/:id', getStudentsBycurse);

module.exports = route;