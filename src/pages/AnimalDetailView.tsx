import { useParams } from "react-router-dom"
import { ShowAnimalDetail } from "../components/ShowAnimalDetail"
import { IAnimal } from "../models/IAnimal";

export const AnimalsDetailView =() =>{
    const {animal}=useParams();

    const animals:IAnimal[] = JSON.parse(localStorage.getItem("localStorageAnimals"));

    return<>

    <ShowAnimalDetail></ShowAnimalDetail>
    </>
}