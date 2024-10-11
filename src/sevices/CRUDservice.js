const connection = require('../config/database')
const getAllusers = async () => {
    let [results, fields] = await connection.query(`select * from Users`)
    return results;
}
const getUpdateUSer = async (userID) => {
    let [results, fields] = await connection.query('select * from Users WHERE id = ?', [userID])
    let user = results && results.length > 0 ? results[0] : {}
    return user;

}
const handleUpdateUser = async (email, namee, city, UserId) => {
    const [results, fields] = await connection.query(
        `UPDATE Users
        SET email = ?, name = ?, city =?
        WHERE id = ? `, [email, namee, city, UserId],
    );
}

const handeDeleteUser = async (id) => {
    const [results, fields] = await connection.query(`DELETE FROM Users WHERE id = ?`, [id]);
}
module.exports = { getAllusers, getUpdateUSer, handleUpdateUser, handeDeleteUser };