"use client"
import React from 'react';
import {useForm} from "react-hook-form";
import {IUserSingUp} from "@/interfaces/IUser";
import {base, urls} from "@/constants/urls";
import {ICarUpdated} from "@/interfaces/ICar";

const SingUpForm = () => {
    console.log(".")
    const {register, handleSubmit} = useForm<IUserSingUp>()

    const formSubmitHandler = async (FormData: IUserSingUp) => {
        const user: ICarUpdated = await fetch(base + urls.singUp, {
            method: "POST",
            headers: {Accept: "application/json"},
            body: JSON.stringify(FormData)
        }).then(data => data.json())
        console.log("received user", FormData);
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

export default SingUpForm;