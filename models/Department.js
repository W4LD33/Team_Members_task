const db = require('../config/db')

class Department {
    constructor(Dept_name){
        console.log(Dept_name)
        this.deptName = Dept_name;
    }
    async save(){
        let sql = `
        INSERT INTO Department(
            Dept_name
        )
        VALUES (
            '${this.deptName}'
        )
        `;
        console.log(sql)
        const [newDepartment, _] = await db.execute(sql);
        return newDepartment;
    }

    static findAll(){
        let sql = "SELECT * FROM Department;";
        return db.execute(sql);
    };

    static findById(id){
        let sql = `SELECT * FROM Department WHERE id = ${id};`;
        return db.execute(sql);
    };

    static deleteById(id) {
        let sql = `DELETE FROM Department WHERE id = ${id};`;
        return db.execute(sql);
    };

    async update() {
        let sql = `
            UPDATE Department SET
                Dept_name = '${this.deptName}'
            WHERE
                id = '${this.deptID}'
        `;
        const [updatedDepartment, _] = await db.execute(sql);
        return updatedDepartment;
    };
};

module.exports = Department;