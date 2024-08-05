import React, {FC} from 'react';
import {ICarUpdated} from "@/interfaces/ICar";
import styles from "./CardCar.module.css"

interface ICarCardProps {
    car: ICarUpdated;
}

const CarCard: FC<ICarCardProps> = ({car}) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.carImage} src={car.img} alt="Car image"/>
            <h4>{car.brand}</h4>
            <p>Year build: {car.yearBuild}</p>
            <p>Price: {car.price}</p>

        </div>
    );
}

export default CarCard;