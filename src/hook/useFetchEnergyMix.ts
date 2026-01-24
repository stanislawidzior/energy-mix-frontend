import {useQuery} from "@tanstack/react-query";
import axios from 'axios'
import type { IEnergyMix } from "../type/IEnergyMix";

export const useFetchEnergyMix = () => {
    return useQuery({
        queryKey: ['energy-mix'],
        queryFn: async () => {
            try{
            const response = await axios.get<IEnergyMix>('http://localhost:8080/api/v1/energy-mix', {timeout: 5000});
            return response.data;
            } catch (error) {
                if(axios.isAxiosError(error)){
                    throw new Error("Could not fetch energy mix data.");
                }
               
            }
        },
        staleTime: 5 * 60 * 1000
    });
}