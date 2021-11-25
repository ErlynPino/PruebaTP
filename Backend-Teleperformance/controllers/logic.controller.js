const db = require('../mongo/model')
const axios = require('./axios');


exports.login = async (req, res) => {
    let { user, password } = req.body;
    let query = await db.user.find({ user, password })
        .then((response) => {
            if (response.length > 0) {
                res.status(200).json(response[0]);
            }
            else {
                res.status(401).json(`error de credenciales`);
            }
        })
        .catch((error) => {
            console.log(`error ${error}`);
        });
}

exports.bringTodo = (req, res) => {
    axios.callApiGet(`https://jsonplaceholder.typicode.com`, '/todos')
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch((error) => {
            res.status(400).json(`error al obtener Todos ${error}`);
        })
}

exports.bringUsers = (req, res) => {
    axios.callApiGet(`https://reqres.in/api`, '/users')
        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch((error) => {
            res.status(400).json(`error al traer los usuarios${error}`);
        })
}

exports.bringUserById = (req,res) => {
    axios.callApiGet(`https://reqres.in/api`, `/users/${req.body.id}`)
    .then((response) => {
        res.status(200).json(response.data);
    })
    .catch((error) => {
        res.status(400).json(`error al traer el usuario ${error}`);
    })

}