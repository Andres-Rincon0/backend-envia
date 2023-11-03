const getClientes = (req, res)=>{
    res.json({
        "message": "get page"
    })
}

const postClientes = (req, res)=>{
    const {nombre,edad} = req.body;

    res.json({
        "message": "post page",
        nombre,edad
    })
}

const deleteClientes = (req, res)=>{
    res.json({
        "message": "delete page"
    })
}

const putClientes = (req, res)=>{
    res.json({
        "message": "put page"
    })
}

const patchClientes = (req, res)=>{
    res.json({
        "message": "patch page"
    })
}
module.exports = 
{
    getClientes,
    postClientes,
    deleteClientes,
    putClientes,
    patchClientes
}