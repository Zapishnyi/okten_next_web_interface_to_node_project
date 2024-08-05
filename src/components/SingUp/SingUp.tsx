"use client"
import React from 'react';
import {useForm} from "react-hook-form";
import {IUserLogin, IUserSingUp} from "@/interfaces/IUser";

const SingUp = () => {
    console.log(".")
    const {register, handleSubmit} = useForm<IUserSingUp>()

    const formSubmitHandler = (FormData: IUserSingUp) => {
        console.log(FormData);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <label>User name:<input type={"text"}{...register("userName")}/></label>
                <label>Password:<input type={"text"}{...register("password")}/></label>
                <label>Email:<input type={"text"}{...register("email")}/></label>
                <button>Submit</button>

            </form>


        </div>
    );
};

export default SingUp;