import { useParams } from "react-router-dom";
import { ShowAnimalDetail } from "../components/ShowAnimalDetail";
import { IAnimal } from "../models/IAnimal";
import "../AnimalDetailStyling.scss";

export const AnimalDetailView = () => {
	const { animalId } = useParams();

	const animals: IAnimal[] = JSON.parse(
		localStorage.getItem("localStorageAnimals") || "[]"
	);
	const animal = animals.find((animal) => animal.id === Number(animalId));

	return (
		<>
			{animal && <ShowAnimalDetail currentAnimal={animal}></ShowAnimalDetail>}
		</>
	);
};
