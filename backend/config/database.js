import mysql from "mysql2";

//connection 
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"loginresgitrationtesting"
});

export default db; 