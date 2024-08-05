import {ICarUpdated} from "@/interfaces/ICar";
import CarCard from "@/components/CarCard/CarCard";

export default async function Home() {
    const cars: ICarUpdated[] = await fetch("https://node-test-server-nhs2.onrender.com/cars").then(data => data.json())
    console.log(cars)
    return <div>
        {cars.map((e, index) => <CarCard key={index} car={e}/>)}
    </div>
}
