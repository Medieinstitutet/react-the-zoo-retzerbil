import { useEffect, useState } from "react";
import { getApiData } from "../hooks/getApiData"
import { IAnimal } from "../models/IAnimal";

export const Animals = () =>{
    const { get } = getApiData("https://animals.azurewebsites.net/api/animals")
    const [animals, setAnimals] = useState<IAnimal[]>([]);
    

    useEffect(()=>{
        const fetchAnimals = async () =>{
            const result = await get();
            setAnimals(result)
        }
        fetchAnimals();
    },[])

console.log(animals);
    return <>

    <h1>Weee I love animals :3</h1>
    <ul>
        {animals.length > 0 &&
        <li>{animals[0].name}</li>}
    </ul>
    </>
}