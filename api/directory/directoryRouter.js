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
  const { employee } = req;
  res.status(200).json(employee);
});

router.put('/:id', updateEmployee, (req, res) => {
  // updateEmployee adds updatedEmployee record from database to req object
  let { updatedEmployee } = req;
  res.status(200).json(updatedEmployee)
});

router.delete('/:id', deleteEmployee, (req, res) => {
  // delete employee triggers response on error, passes through on success
  res.status(200).json({ message: `Employee with id ${id} deleted.`})
});


module.exports = router;
