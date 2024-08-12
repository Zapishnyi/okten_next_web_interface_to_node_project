import CarCard from "@/components/CarCard/CarCard";
import styles from "./page.module.css"
import {IPaginationResult} from "@/interfaces/IPaginated";
import {ICarUpdated} from "@/interfaces/ICar";
import {CarOrderByEnum} from "@/enums/carOrderBy.enum";

export default async function Home() {
    // const cars: ICarUpdated[] = await fetch("http://localhost:3001/cars").then(data => data.json())

    const cars = (await fetch("https://node-test-server-nhs2.onrender.com/cars", {cache: "default"}).then(data => data.json())) as IPaginationResult<ICarUpdated, CarOrderByEnum>
    console.log("Cars", cars)


    return <div className={styles.pageWrapper}>
        {cars.data && cars.data.map((e, index) => <CarCard key={index} car={e}/>)}
    </div>


}
