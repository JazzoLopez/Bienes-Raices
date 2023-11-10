
const findAll = (req, res) => {
    res.send('Encuentra a todos')
}

const insertOne = (req, res) => {
    res.send('Encuentra uno')
}

const findOneById = (req, res) => {
    res.send('Encuentra uno por id')
}

const findOneByUserId = (req, res) => {
    res.send('Encuentra uno por el id del usuario')
}

const updateOne = (req, res) => {
    res.send('Actualiza uno')
}

const deleteOne = (req, res) => {
    res.send('Elimina uno')
}

export {findAll, insertOne, findOneById, findOneByUserId, updateOne, deleteOne};