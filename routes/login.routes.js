import express from "express";
import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const login = express.Router();

login.post('/', async (req, res) => {
    const {email, password} = req.body;

    const registeredUser = await User.findOne(
        {where : { email }}
    ).catch(
        (err) => {
            console.log("Eror:", err);
        }
    );

    if (!registeredUser)
        return res
            .status(400)
            .json({message: "Email ou senha invalidos"})

    //validar a senha do usuario//
        if ( !bcrypt.compareSync(password, registeredUser.password) )
         return res
         .status(400)
         .json({message: "Email ou senha invalidos"})

    const token = jwt.sign(
        // PAYLOAD: o que será armazenado no TOKEN//
        {
            id: registeredUser.id,
            email: registeredUser.email
        },
        //Secret or Private Key//
        process.env.JWT_SECRET,
        //OPTIONS//
        {
            expiresIn: "1h"
        }
    );

    // Envia confirmaçao e token para usuario//
    res.json({
        message: "Bem vindo",
        token: token
    })

});

export default login;