import axios from "axios";
import { IAnimalResponse } from "../models/IAnimalResponse";

export const getApiData = (url:string) =>{
    const get = async () =>{
        const response = await axios.get<IAnimalResponse>(url);
        return response.data.AnimalList
    }
    return {get}
}