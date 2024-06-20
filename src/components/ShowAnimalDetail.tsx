import { useState } from "react";
import { IAnimal } from "../models/IAnimal"
interface IDetailedAnimalProps {
    currentAnimal: IAnimal
}

const handleClick = (animal: IAnimal, setLastFed:React.Dispatch<React.SetStateAction<string>>) => {
    const currentDate = new Date();
    const currentDate8601 = currentDate.toISOString();

    const animals: IAnimal[] = JSON.parse(localStorage.getItem("localStorageAnimals") || "[]");
    const animalToChange = animals.find(animalToChange => animalToChange.id === Number(animal.id));
    if (animalToChange)  { 
            animalToChange.lastFed = currentDate8601;
            localStorage.setItem("localStorageAnimals", JSON.stringify(animals))
            setLastFed(currentDate8601);
        };
}

export const ShowAnimalDetail = ({ currentAnimal }: IDetailedAnimalProps) => {
const [lastFed, setLastFed] = useState(currentAnimal.lastFed)
    return <>
        <h1>Details for {currentAnimal.name}</h1>
        <img src={currentAnimal.imageUrl} alt={currentAnimal.name} />
        <h2>Latin name: {currentAnimal.latinName}</h2>
        <p>{currentAnimal.longDescription}</p>
        <p>Last fed: {lastFed}</p>
        <button onClick={() => handleClick(currentAnimal, setLastFed)}>Feed</button>
    </>
}