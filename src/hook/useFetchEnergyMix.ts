import {useQuery} from "@tanstack/react-query";
import axios from 'axios'
import type { IEnergyMix } from "../type/IEnergyMix";
import { API_CONFIG } from "../config/api";

export const useFetchEnergyMix = () => {
    return useQuery({
        queryKey: ['energy-mix'],
        queryFn: async () => {
            try{
            const response = await axios.get<IEnergyMix>(API_CONFIG.endpoints.energyMix, {timeout: API_CONFIG.timeout});
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