const Author = require('../model/Author')


const createAuthor = (req, res) => {
    Author.create(req.body).then(() => {
        res.send('user created');
    })
}

module.exports = {createAuthor}