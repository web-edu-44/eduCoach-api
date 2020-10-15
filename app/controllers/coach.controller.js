const db = require("../models");
const Coach = db.coachs;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Coach
  const coach = new Coach({
    type: req.body.type,
    username: req.body.username,
    password: req.body.password,
    info: req.body.info,
    appointments: req.body.appointments
  });

  // Save Coach in the database
  coach
    .save(coach)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Coach."
      });
    });
};

exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};

  Coach.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Coaches."
      });
    });
};

exports.findByUsername = (req, res) => {
  const username = req.params.username;

  Coach.find({username: username})
    .then(data => {
      if (!data)
        res.status(404).send({ message: `Not found Coach with username ${username}` });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: `Error retrieving Coach with username=${username}` });
    });
};


exports.findOne = (req, res) => {
  const id = req.params.id;

  Coach.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: `Not found Coach with id ${id}` });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: `Error retrieving Coach with id=${id}` });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Coach.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Coach with id=${id}. Maybe Coach was not found!`
        });
      } else res.send({ message: `Coach with id=${id} was updated successfully.` });
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Coach with id=${id}`
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Coach.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Coach with id=${id}. Maybe Coach was not found!`
        });
      } else {
        res.send({
          message: "Coach was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Coach with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Coach.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Coach were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Coaches."
      });
    });
};

// exports.findAllPublished = (req, res) => {
//   Student.find({ published: true })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Students."
//       });
//     });
// };

