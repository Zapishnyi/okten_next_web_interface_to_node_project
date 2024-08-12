import {ICarUpdated} from "@/interfaces/ICar";
import CarCard from "@/components/CarCard/CarCard";
import styles from "./page.module.css"
import {IPaginationResult} from "@/interfaces/IPaginated";
import {CarOrderByEnum} from "@/enums/carOrderBy.enum";

export default async function Home() {
    // const cars: ICarUpdated[] = await fetch("http://localhost:3001/cars").then(data => data.json())
    let cars: IPaginationResult<ICarUpdated, CarOrderByEnum>
    cars = await fetch("https://node-test-server-nhs2.onrender.com/cars").then(data => data.json())
    return <div className={styles.pageWrapper}>
        {cars.data.map((e, index) => <CarCard key={index} car={e}/>)}
    </div>


}
