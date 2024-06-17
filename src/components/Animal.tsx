import { IAnimal } from "../models/IAnimal"
import "../AnimalStyling.scss"
interface IAnimalProps{
    animal: IAnimal
}
export const Animal = ({animal}:IAnimalProps) =>{


    return <>
    <img src={animal.imageUrl} alt={animal.name} />
    <h1>{animal.name}</h1>
    <p>{animal.shortDescription}</p>
    </>
}