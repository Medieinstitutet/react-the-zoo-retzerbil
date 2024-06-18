import { IAnimal } from "../models/IAnimal"
interface IAnimalProps {
    animal: IAnimal
}
export const Animal = ({ animal }: IAnimalProps) => {
    return <>
        <li className="Animal">
            <img src={animal.imageUrl} alt={animal.name} />
            <h1>{animal.name}</h1>
            <p>{animal.shortDescription}</p>
        </li>
    </>
}