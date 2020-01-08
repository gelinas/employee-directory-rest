const router = require("express").Router();

const {
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
} = require("./directoryHelpers.js");

router.post("/", addEmployee, (req, res) => {
  // addEmployee adds newEmployee from database to req object
  const { newEmployee } = req;
  res.status(201).json(newEmployee);
});

router.get('/', getAllEmployees, (req, res) => {
  // getAllEmployees adds employeeList from database to req object
  const { employeeList } = req;
  res.status(200).json(employeeList);
});

router.get('/:id', getEmployeeById, (req, res) => {
  // getEmployeeById adds employee record from database to req object
  const { id } = req.params;
  const { employee } = req;
  employee ?
    res.status(200).json(employee)
    : res.status(404).json({ message: `Employee with id ${id} is not in the database`})
});

router.post('/:id', updateEmployee, (req, res) => {
  // updateEmployee adds updatedEmployee record from database to req object
  let { updatedEmployee } = req;
  res.status(200).json(updatedEmployee)
});

router.delete('/:id', deleteEmployee, (req, res) => {
  // delete employee triggers response on error, passes through on success
  const { id } = req.params;
  res.status(200).json({ message: `Employee with id ${id} deleted.`})
});


module.exports = router;
