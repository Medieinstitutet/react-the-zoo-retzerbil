import { useParams } from "react-router-dom"
import { ShowAnimalDetail } from "../components/ShowAnimalDetail"
import { IAnimal } from "../models/IAnimal";

export const AnimalDetailView = () => {
    const { animalId } = useParams();

    const animals: IAnimal[] = JSON.parse(localStorage.getItem("localStorageAnimals") || "[]");
    const animal = animals.find(animal => animal.id === Number(animalId));

    console.log("nu är vi i animaldetailview", animalId);
    

    return <>
        {animal &&
            <ShowAnimalDetail currentAnimal={animal}></ShowAnimalDetail>
        }
    </>
}