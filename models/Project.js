const db = require('../config/db')

class Project {
    constructor(Project_id, Project_name){
        this.projectID = Project_id;
        this.projectName = Project_name;
    }
    async save(){
        let sql = `
        INSERT INTO Project(
            Project_id,
            Project_name
        )
        VALUES (
            '${this.projectID}',
            '${this.projectName}'
        )
        `;
        const [newProject, _] = await db.execute(sql);
        return newProject;
    }

    static findAll(){
        let sql = "SELECT * FROM Project;";
        return db.execute(sql);
    };

    static findById(id){
        let sql = `SELECT * FROM Project WHERE Project_id = ${id};`;
        return db.execute(sql);
    };

    static deleteById(id) {
        let sql = `DELETE FROM Project WHERE Project_id = ${id}`;
        return db.execute(sql);
    };

    async update() {
        let sql = `
            UPDATE Project SET
            Project_name = '${this.projectName}'
            WHERE
                Project_id = '${this.projectID}'
        `;
        const [updatedProject, _] = await db.execute(sql);
        return updatedProject;
    };
};

module.exports = Project;