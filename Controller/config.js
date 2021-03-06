const express = require('express');

const app = express();

const knex = require("../database/db");


const GetData = async (req, res) => {
    console.log('req come at get data controller');
    let a = await knex.select("*").from("RegistrationForm");
    res.json(a)
    
}
// post data into table
const PostData = async (req, res) => {
    console.log('req come at post data controller');
    console.log(req.body);
    const Data = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        BirthDate: req.body.BirthDate,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Company: req.body.Company,
        Country: req.body.Country,
        Mailling_Address: req.body.Mailling_Address,
        Comment: req.body.Comment,
        Current_Date: req.body.Current_Date

    };
    console.log(Data);
    await knex("RegistrationForm").insert(Data)
        // res.send(Data)
        .then(result => {
            res.send("Record inserted Successfully")
        }).catch((err) => {
            console.log(err.sqlMessage)
            res.status(500).json(err.sqlMessage)
        })
}

module.exports = { PostData, GetData }
