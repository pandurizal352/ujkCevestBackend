const express= require ('express');
const router = express.Router();
const SiswaController = require('../controllers/siswaController');
const {validationBodySiswa} = require('../middleware/validation');


router.get('/', SiswaController.getAllSiswa);
router.get('/:id', SiswaController.getSiswaById);
router.post('/', validationBodySiswa, SiswaController.createSiswa);
router.put('/:id', validationBodySiswa, SiswaController.updateSiswa);
router.delete('/:id',  SiswaController.deleteSiswa);

module.exports= router;