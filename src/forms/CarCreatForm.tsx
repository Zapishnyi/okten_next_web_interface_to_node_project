"use client"
import React from 'react';
import {useForm} from "react-hook-form";
import {ICarCreate} from "@/interfaces/ICar";

const CarCreateForm = () => {
    const {register, handleSubmit} = useForm<ICarCreate>()
    const formSubmitHandler = (FormData: ICarCreate) => {
        console.log(FormData);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <label>Brand:<input type={"text"}{...register("brand")}/></label>
                <label>Year of build:<input type={"text"}{...register("yearBuild")}/></label>
                <label>Price:<input type={"text"}{...register("price")}/></label>
                <label>Second Hand:<input type={"checkbox"}{...register("secondHand")}/></label>
                <label>Images:<input type={"file"}{...register("img")}/></label>
                <button>Submit</button>

            </form>


        </div>
    );
};

export default CarCreateForm;