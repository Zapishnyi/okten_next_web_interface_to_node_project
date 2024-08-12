"use client"
import {ICarUpdated} from "@/interfaces/ICar";
import CarCard from "@/components/CarCard/CarCard";
import styles from "./page.module.css"
import {IPaginationResult} from "@/interfaces/IPaginated";
import {CarOrderByEnum} from "@/enums/carOrderBy.enum";
import {useEffect, useState} from "react";

export default function Home() {
    // const cars: ICarUpdated[] = await fetch("http://localhost:3001/cars").then(data => data.json())
    const [cars, setCars] = useState<IPaginationResult<ICarUpdated, CarOrderByEnum> | null>(null)
    useEffect(() => {
        fetch("https://node-test-server-nhs2.onrender.com/cars", {cache: "no-store"}).then(async data => setCars(await data.json()))
        console.log("Cars", cars)
    }, []);

    return <div className={styles.pageWrapper}>
        {cars?.data && cars.data.map((e, index) => <CarCard key={index} car={e}/>)}
    </div>


}
