import axios from "axios";

export const getApiData = (url:string) =>{
    const get = async <T>() =>{
        const response = await axios.get<T>(url);
        return response.data
    }
    return {get}
}