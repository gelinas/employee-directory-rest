module.exports = {
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
};

const Employees = require("./directoryModel.js");  

function addEmployee(req, res, next) {
  const newEmployee = req.body

  Employees.add(newEmployee)
    .then(employee => {
      req.newEmployee = employee;
      next();
    })
    .catch(err => {
      console.log("error from addEmployee middleware", err);
      res.status(500).json({
        message: `Error adding the employee to database.`,
        error: err.toString()
      })
    });
}  

function getAllEmployees(req, res, next) {

  Employees.find()
    .then(employeeList => {
      res.json(employeeList);
      next();
    })
    .catch(err => {
      res.status(500).json({
        message: `Error getting employees from the database.`,
        error: err.toString()
      })
    });
}

function getEmployeeById(req, res, next) {
  const { id } = req.params;

  Employees.findById(id)
    .then(employee => {
      res.json(employee)
      next();
    })
    .catch(err => {
      res.status(500).json({
        message: `Error getting employee's information from the database.`,
        error: err.toString()
      })
    });
}

function updateEmployee(req, res, next) {
  const { id } = req.params;
  const changes = req.body;

  Employees.update(changes, id)
    .then(records => {
      // update returns count of records updated
      if (records) {
        Employees.findById(id)
          .then(updatedRecord => {
            req.updatedEmployee = updatedRecord;
            next();
          })
          .catch(err => {
            res.status(500).json({
              message: `Update succeeded, error getting updated record from database.`,
              error: err.toString()
            })
          })
      } else {
        res.status(500).json({
          message: `Error updating the employee in the database.`,
          error: err.toString()
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: `Error updating the employee in the database.`,
        error: err.toString()
      })
    });
}  

function deleteEmployee(req, res, next) {
  const { id } = req.params;

  Employees.remove(id)
    .then(records => {
      if (records) {
        next();
      } else {
        res.status(500).json({
          message: `Error updating the employee in the database.`,
          error: err.toString()
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: `Error updating the employee in the database.`,
        error: err.toString()
      })
    });
}  