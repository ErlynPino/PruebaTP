const logicController = require('../controllers/logic.controller');

module.exports = (router) => {
    router.post("/login", logicController.login);
    router.post("/todos", logicController.bringTodo);
    router.post("/users", logicController.bringUsers);
}