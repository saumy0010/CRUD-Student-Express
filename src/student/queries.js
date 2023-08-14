const getStudents = "SELECT * FROM test_table";
const getStudentById = "SELECT * FROM test_table WHERE id = $1";
const checkNameExists = "SELECT s FROM test_table s WHERE s.name = $1";
const addStudent = "INSERT INTO test_table (id, name, gender) VALUES ($1, $2, $3)";
const removeUser = "DELETE FROM test_table WHERE id = $1";
const updateUser = "UPDATE test_table SET name = $1 WHERE id = $2";

module.exports = {
    getStudents,
    getStudentById,
    checkNameExists,
    addStudent,
    removeUser,
    updateUser,
}