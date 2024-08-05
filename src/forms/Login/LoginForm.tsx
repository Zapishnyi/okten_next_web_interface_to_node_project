"use client"
import React from 'react';
import {useForm} from "react-hook-form";
import {IUserLogin} from "@/interfaces/IUser";

const LoginForm = () => {
    console.log(".")
    const {register, handleSubmit} = useForm<IUserLogin>()

    const formSubmitHandler = (FormData: IUserLogin) => {
        console.log(FormData);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <label>User name:<input type={"text"}{...register("userName")}/></label>
                <label>Password:<input type={"text"}{...register("password")}/></label>
                <button>Submit</button>

            </form>


        </div>
    );
};

export default LoginForm;