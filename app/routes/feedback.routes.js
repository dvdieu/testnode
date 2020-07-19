module.exports = app => {
    const feedBack = require("../controllers/feedback.controller");
    var router = require("express").Router();
    // Create a new feedBack HTTP POST
    router.post("/", feedBack.create);
    app.use("/api/feedback", router);
};
