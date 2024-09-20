import axios, { AxiosResponse } from "axios";
import { ImageResponse } from "../App/App.types";

const API_KEY = "y7_Bvyt_TQP1bMgl9HJh_HiI9cbo6aT-p5XyD9_6pcE";
axios.defaults.baseURL =  "https://api.unsplash.com/search/photos";


interface Params {
            query: string,
            page: number,
            per_page: number,
            orientation: string,
            client_id: string,
}

export default async function fetchImages<T>(searchQuery: string, page: number) : Promise<T> {
    const response: AxiosResponse<ImageResponse> = await axios.get("", {
        params: <Params> {
            query: searchQuery,
            page,
            per_page: 15,
            orientation: "landscape",
            client_id: API_KEY,
        },
    });
    return response.data as T;
  };

