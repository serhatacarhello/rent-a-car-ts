import { useEffect, useState } from "react";
import { ICarProps } from "../types";

const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "121f897c0cmsh80850168403bfbap1168e4jsn5664b7932b70",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

interface ApiResponse {
  isLoading: boolean;
  data: ICarProps[];
}

const useApi = (endpoint: string): ApiResponse => {
  console.log("useapi calıştı");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<ICarProps[]>([]);

  const fetchApi: () => Promise<void> = async () => {
    try {
      const response = await fetch(`${url}/${endpoint}`, options);
      const data = await response.json();
      setData(data);
      console.log("🚀 ~ file: useApi.js:23 ~ fetchApi ~ response:", data);
      setIsLoading(false);
    } catch (error: unknown) {
      console.log("error", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [endpoint]);

  return { isLoading, data };
};

export default useApi;
