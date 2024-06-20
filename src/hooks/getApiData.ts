import axios from "axios";
import { IAnimal } from "../models/IAnimal";


export const getApiData = (url: string) => {
    const get = async () => {
        const response = await axios.get<IAnimal[]>(url);
        return response.data

    }
    return { get }
}