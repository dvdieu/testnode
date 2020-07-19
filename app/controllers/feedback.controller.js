const db = require("../models");
const FeedBack = db.FeedBack;

/**
 * Create and Save a new feedBack
 */

exports.create = (req, res) => {
    // Validate request
    if (!req.body.content) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create a FeedBack
    const feedBackRequest = new FeedBack({
      content: req.body.content
    });
  
    // Save FeedBack in the database
    feedBackRequest
      .save(feedBackRequest)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the FeedBack."
        });
      });
  };