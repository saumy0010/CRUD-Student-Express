const client = require("../../database");
const queries = require("./queries")


const getStudents = (req, res) => {
    client.query(queries.getStudents, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows)
    })
}


const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    client.query(queries.getStudentById, [id], (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows)
    })

}

const addStudent = (req, res) => {
    const { id, name, gender } = req.body;
    client.query(queries.checkNameExists, [name], (error, result) => {
        if (result.rows.length) {
            res.send("Name already exist..!")
        }

        // add user in db

        client.query(queries.addStudent, [id, name, gender], (error, result) => {
            if (error) throw error;
            res.status(201).send("User added successfully!");
        })

    })
}

// remove user

const removeUser = (req, res) => {
    const id = parseInt(req.params.id);
    client.query(queries.getStudentById, [id], (error, result) => {
        const noUserFound = !result.rows.length;
        if (noUserFound) {
            res.send("User not found.");

        }

        // remove user

        client.query(queries.removeUser, [id], (error, result) => {
            if (error) throw error;
            res.status(200).send("User deleted successfully!");
        })

    })
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body
    client.query(queries.getStudentById, [id], (error, result) => {
        const noUserFound = !result.rows.length;
        if (noUserFound) {
            res.send("User not found.");

        }

        // Update user

        client.query(queries.updateUser, [name, id], (error, result) => {
            if (error) throw error;
            res.status(200).send("User updated successfully!");
        })

    })
}



module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeUser,
    updateUser,
}