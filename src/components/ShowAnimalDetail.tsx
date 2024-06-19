import { IAnimal } from "../models/IAnimal"
interface IDetailedAnimalProps {
    currentAnimal: IAnimal
}


const handleClick = ()=>{
    
}

export const ShowAnimalDetail = ({ currentAnimal }: IDetailedAnimalProps) => {

    return <>
        <h1>Details for {currentAnimal.name}</h1>
        <img src={currentAnimal.imageUrl} alt={currentAnimal.name} />
        <h2>Latin name: {currentAnimal.latinName}</h2>
        <p>{currentAnimal.longDescription}</p>
        <p>Last fed: {currentAnimal.lastFed}</p>
        <button onClick={handleClick}>Feed</button>
    </>
}