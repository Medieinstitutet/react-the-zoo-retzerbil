import { getApiData } from "../hooks/getApiData"

export const Animals = () =>{
    const { get } = getApiData("https://animals.azurewebsites.net/api/animals")
const animals = get();
console.log(animals);
    return <>

    <h1>Weee I love animals :3</h1>
    <ul>
    </ul>
    </>
}