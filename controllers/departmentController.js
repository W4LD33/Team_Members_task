const Department = require('../models/Department')

exports.getDepartments = async (req, res, next) => {
    try {
        let [departments,_] = await Department.findAll();
        res.status(200).json({ count: departments.length, departments});
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.postDepartment = async (req, res, next) => {
    console.log(req.body)
    console.log('POST /departments'); // Add this line
    try{
        let { Dept_name } = req.body;
        let department = new Department(Dept_name);
        department = await department.save();
        res.status(201).json({ message: "Department created"})

    } catch(error){
        console.log(error)
        next(error)
    }
}

exports.deleteDepartment = async (req, res, next) => {
    try{
        let departmentID = req.params.id;
        await Department.deleteById(departmentID);
        res.status(200).json({ message: "Deleted department successfully"})
    } catch (error){
        console.log(error);
        next(error);
    }
}

exports.putDepartment = async (req, res, next) => {
    try{
        let departmentID = req.params.id;
        let { Dept_id, Dept_name } = req.body;
        let department = new Department(Dept_id, Dept_name);
        department = await department.update();
        res.status(201).json({ message: "Department updated successfully"})
    } catch (error){
        console.log(error);
        next(error);
    }
}

exports.getDepartmentById = async (req, res, next) => {
    try{
        let departmentID = req.params.id;
        let [department, _] = await Department.findById(departmentID);
        res.status(200).json({ department: department[0] });
    } 
    catch(error){
        console.log(error)
        next(error)
    }
}

