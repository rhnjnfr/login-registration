import express from "express";
import cors from "cors";
import Router from "./routes/routes.js";
import { checkUser } from "./models/userModel.js";

const http = require('http');
const app = express (); //old
const { hostname } = require('os'); 

const port = process.env.PORT || 5000; 
const server = http.createServer(app);
//const app2 = http.create

app.use(express.json());
app.use(cors());
app.use(Router);


app.get('/api/check-user', (req, res) => {
    const email = req.query.email;
    const password = req.query.pass;
    checkUser(email, password, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ user: results[0] });
        }
    });
});


// app.listen(5000, ()=> {
//     console.log("Server running successful!");
// })
server.listen(port, hostname(), ()=> { 
    console.log(`Started on port ${port}`);
});