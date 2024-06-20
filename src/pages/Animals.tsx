import { useEffect, useState } from "react";
import { getApiData } from "../hooks/getApiData"
import { IAnimal } from "../models/IAnimal";
import { Animal } from "../components/Animal";
import "../AnimalListStyling.scss"

export const Animals = () => {
    const { get } = getApiData("https://animals.azurewebsites.net/api/animals")
    const [animals, setAnimals] = useState<IAnimal[]>([]);


    useEffect(() => {
        const fetchAnimals = async () => {
            const result = await get();
            setAnimals(result)
            if (!localStorage.getItem("localStorageAnimals")) {
                localStorage.setItem("localStorageAnimals", JSON.stringify(result));
            }
        }
        fetchAnimals();
    }, [])

    return <>

        <h1>Here are the Animals in The Zoo!</h1>
        <section className="AnimalSection">
            <ul>
                {animals.map((animal) => <Animal animal={animal} key={animal.id} />)}
            </ul>
        </section>
    </>
}