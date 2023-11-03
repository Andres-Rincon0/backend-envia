const {Router} = require('express');
const {getClientes, postClientes, deleteClientes, putClientes, patchClientes, } = require('../controllers/clientes.controllers.js')

const router = Router();

router.get("/", getClientes);

router.post("/", postClientes);

router.delete("/", deleteClientes);

router.put("/", putClientes);

router.patch("/", patchClientes);

module.exports = router;