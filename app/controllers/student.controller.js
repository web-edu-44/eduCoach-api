const db = require("../models");
const Student = db.students;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Student
  const student = new Student({
    type: req.body.type,
    username: req.body.username,
    password: req.body.password,
    info: req.body.info,
    appointments: req.body.appointments
  });

  // Save Student in the database
  student
    .save(student)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Student."
      });
    });
};

exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};

  Student.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Students."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Student.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: `Not found Student with id ${id}` });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: `Error retrieving Student with id=${id}` });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Student.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Student with id=${id}. Maybe Student was not found!`
        });
      } else res.send({ message: "Student was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Student with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Student.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
        });
      } else {
        res.send({
          message: "Student was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Student with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Student.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Student were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Students."
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

