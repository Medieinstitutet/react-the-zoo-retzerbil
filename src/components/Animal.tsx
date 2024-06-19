import { useNavigate } from "react-router-dom"
import { IAnimal } from "../models/IAnimal"
interface IAnimalProps {
    animal: IAnimal
}
export const Animal = ({ animal }: IAnimalProps) => {
    const navigate = useNavigate();

    const handleClick = () =>{
    navigate("/animaldetailview/" + animal.id)
    }

    return <>
        <li className="Animal">
            <img src={animal.imageUrl} alt={animal.name} />
            <h1>{animal.name}</h1>
            <p>{animal.shortDescription}</p>
            <button onClick={handleClick}>Läs mer!</button>
        </li>
    </>
}