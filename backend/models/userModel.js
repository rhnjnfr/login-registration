// TBL_USER TESTING INCLUDES CREATE, UPDATE, RETRIEVE, AND DEACTIVATE 
import db from "../config/database.js";

//check if user exists | TESTING  pass,
export const checkUser = (email, pass, result)=>{
   // db.query("SELECT * FROM tbl_user WHERE user_email = ? && user_password = ?", 
    db.query("SELECT * FROM tbl_user WHERE user_email = ? && user_password = ?", 
        [email, pass], //kani na pass ang wala na define 
        (err, results) =>{
        if(err){
            console.log("ERROR: " + err);
            result(err, null)
        }
        else{
            result(null,results)
        }
    } )
}

//get all users
export const getUsers = (result)=>{
    db.query ("SELECT * FROM tbl_user", (err,results)=>{
        if(err){
            console.log("ERROR: " + err);
            result(err, null)
        }
        else{
            result(null,results)
        }
    })
}

//get single user 
export const getUserbyUserID = (id, result)=>{
    db.query("SELECT * from tbl_user where user_id = ?", 
        [id],
        (err, results) => {
            if(err){
                console.log(err); 
                result(err,null); 
            }
            else{
                result(null,results[0]);
            }
        }
    )
}

//insert user to database 
export const insertUser = (data,result) => {
    db.query(`INSERT INTO tbl_user SET ?`,
        [data], 
        (err, results) => {
            if(err){
                if(err.code = 'ER_DUP_ENTRY'){
                    result('ER_DUP_ENTRY', null);
                }
                else{
                    console.log(err);
                    result(err,null);
                }
            }
            else{
                result (null, results); 
                console.log("Successfully added");
            }
        }
    )
}


//update user 
export const updateUserbyUserID = (data, id, result) => {
    db.query ("UPDATE tbl_user SET user_email = ? , user_password = ? WHERE user_id = ?", 
        [data.user_email, data.user_password, user_id],
        (err, results) => {
            if(err){
                console.log(err); 
                result (err,null);
            }else{
                result(null, results);
            }
        }
    )
}

//deactivate user 
export const deactivateUserbyUser_ID = (data, id, result) => {
    db.query ("UPDATE tbl_user SET active = ? WHERE user_id = ?",
        [data.active, data.user_id],
        (err,results) => {
            if(err){
                console.log(err);
                result (err, null);
            }
            else{
                result(null, results);
            }
        }
    )
}