import { IAnimal } from "../models/IAnimal"
interface IDetailedAnimalProps {
    currentAnimal: IAnimal
}

export const ShowAnimalDetail = ({ currentAnimal }: IDetailedAnimalProps) => {

    return <>
        <h1>Details for {currentAnimal.name}</h1>
        <img src={currentAnimal.imageUrl} alt={currentAnimal.name} />
        <h2>{currentAnimal.latinName}</h2>
        <p>{currentAnimal.longDescription}</p>
    </>
}