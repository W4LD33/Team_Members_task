const db = require('../config/db')

class Employee {
    constructor(EmployeeID, Name, Job_Title, Phone_no, Salary, Dept_id, Project_id){
        this.employeeID = EmployeeID;
        this.name = Name;
        this.job_title = Job_Title;
        this.phone_no = Phone_no;
        this.salary = Salary;
        this.dept_id = Dept_id;
        this.project_id = Project_id;
    }
    async save(){
        let sql = `
        INSERT INTO Employee(
            EmployeeID,
            Name,
            Job_Title,
            Phone_no,
            Salary,
            Dept_id,
            Project_id
        )
        VALUES (
            '${this.employeeID}',
            '${this.name}',
            '${this.job_title}',
            '${this.phone_no}',
            '${this.salary}',
            '${this.dept_id}',
            '${this.project_id}'
        )
        `;
        const [newEmployees, _] = await db.execute(sql);
        return newEmployees;
    }

    static findAll(){
        let sql = "SELECT * FROM Employee;";
        return db.execute(sql);
    };

    static findById(id){
        let sql = `SELECT * FROM Employee WHERE EmployeeID = ${id};`;
        return db.execute(sql);
    };

    static deleteById(id) {
        let sql = `DELETE FROM Employee WHERE EmployeeID = ${id}`;
        return db.execute(sql);
    };

    async update() {
        let sql = `
            UPDATE Employee SET
                Name = '${this.name}',
                Job_Title = '${this.job_title}',
                Phone_no = '${this.phone_no}',
                Salary = '${this.salary}',
                Dept_id = '${this.dept_id}',
                Project_id = '${this.project_id}'
            WHERE
            EmployeeID = '${this.employeeID}'
        `;
        const [updatedEmployee, _] = await db.execute(sql);
        return updatedEmployee;
    };
};

module.exports = Employee;