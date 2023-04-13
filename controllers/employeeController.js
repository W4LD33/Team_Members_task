const Employee = require('../models/Employee')

exports.getEmployees = async (req, res, next) => {
    try {
        let [employees,_] = await Employee.findAll();
        res.status(200).json({ count: employees.length, employees});
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.postEmployee = async (req, res, next) => {
    try{
        let { EmployeeID, Name, Job_Title, Phone_no, Salary, Dept_id, Project_id } = req.body;
        let employee = new Employee(EmployeeID, Name, Job_Title, Phone_no, Salary, Dept_id, Project_id);
        employee = await employee.save();
        res.status(201).json({ message: "Employee created"})

    } catch(error){
        console.log(error)
        next(error)
    }
}

exports.deleteEmployee = async (req, res, next) => {
    try{
        let employeeID = req.params.id;
        await Employee.deleteById(employeeID);
        res.status(200).json({ message: "Deleted employee successfully"})
    } catch (error){
        console.log(error);
        next(error);
    }
}

exports.putEmployee = async (req, res, next) => {
    try{
        let EmployeeID = req.params.id;
        let { Name, Job_Title, Phone_no, Salary, Dept_id, Project_id } = req.body;
        let employee = new Employee(EmployeeID, Name, Job_Title, Phone_no, Salary, Dept_id, Project_id);
        employee = await employee.update();
        res.status(201).json({ message: "Employee updated"})
    } catch (error){
        console.log(error);
        next(error);
    }
}

exports.getEmployeeById = async (req, res, next) => {
    try{
        let employeeID = req.params.id;
        let [employee, _] = await Employee.findById(employeeID);
        res.status(200).json({ employee: employee[0] });
    } 
    catch(error){
        console.log(error)
        next(error)
    }
}

