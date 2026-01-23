import {useQuery} from "@tanstack/react-query";
import axios from 'axios'
import type { EnergyMix } from "../type/energyMix";

export const useFetchEnergyMix = () => {
    return useQuery({
        queryKey: ['energy-mix'],
        queryFn: async () => {
            try{
            const response = await axios.get<EnergyMix>('http://localhost:8080/api/v1/energy-mix', {timeout: 5000});
            console.log(response)
            return response.data;
            } catch (error) {
                throw new Error('Failed to connect to the server');
            }
        },
        staleTime: 5 * 60 * 1000
    });
}