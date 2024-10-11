const connection = require('../config/database')
const { getAllusers, getUpdateUSer, handleUpdateUser, handeDeleteUser } = require('../sevices/CRUDservice')
const getHomePage = async (req, res) => {

    //process data
    //call model
    // let users = [];
    // connection.query(
    //     'select * from Users ',
    //     function (err, results, fields) {
    //         console.log(results); // results contains rows returned by server
    //         console.log(fields); // fields contains extra meta data about results, if available
    //         users = results;
    //         res.send(JSON.stringify(users))
    //     }
    // );


    let results = await getAllusers();
    console.log("check result :", results)
    return res.render('Home.ejs', { listUser: results })

}
const getVietz = (req, res) => {
    res.render('sample.ejs')
}
const PostUser = async (req, res) => {
    // Using placeholders
    email = req.body.email;
    namee = req.body.Myname;
    city = req.body.city;
    // console.log("check :", email, ">>>", namee, ">>>", city)
    // connection.query(
    //     ` INSERT INTO Users(email,name,city)
    //      VALUES(?,?,?)`,
    //     [email, namee, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send("add user succed")
    //     }
    // );
    const [results, fields] = await connection.query(
        ` INSERT INTO Users(email,name,city) VALUES(?,?,?)`, [email, namee, city],
        res.send("add user succed")
    );

}
const getCreate = (req, res) => {
    res.render('create.ejs')
}
const GetEditUser = async (req, res) => {
    let userID = req.params.id
    let user = await getUpdateUSer(userID)
    res.render('Edituser.ejs', { userEdit: user })

}
const PostEditUser = async (req, res) => {
    // Using placeholders
    email = req.body.email;
    namee = req.body.Myname;
    city = req.body.city;
    UserId = req.body.UserId

    await handleUpdateUser(email, namee, city, UserId)

    res.redirect('/')

}
const GetDeleteUser = async (req, res) => {
    let userID = req.params.id

    let user = await getUpdateUSer(userID)
    res.render('deleteUser.ejs', { userDele: user })
}
const postDeleteUser = async (req, res) => {
    const id = req.body.UserId
    console.log("check cai id ne L", id)
    await handeDeleteUser(id)
    res.redirect('/')

}
module.exports = { getHomePage, getVietz, PostUser, getCreate, GetEditUser, PostEditUser, GetDeleteUser, postDeleteUser }