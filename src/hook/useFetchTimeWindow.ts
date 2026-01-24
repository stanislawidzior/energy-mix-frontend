import {useQuery} from "@tanstack/react-query";
import axios from 'axios'
import type { ITimeWindow } from "../type/ITimeWindow";
import { API_CONFIG } from "../config/api";

export const useFetchTimeWindow = (timeWindowSize : number) =>{
    return useQuery({
        queryKey: ['time-window', timeWindowSize],
        queryFn: async () => {
            try{
            const response = await axios.get<ITimeWindow>(`${API_CONFIG.endpoints.timeWindow}?size=${timeWindowSize}`, {timeout: API_CONFIG.timeout});
            return response.data;
            }catch (error) {
                if(axios.isAxiosError(error)){
                    if(error.response?.data?.code == "400"){
                        throw new Error('Invalid request. Please check the time window size.');
                    }
                    else if(error.response?.data?.code == "500"){
                        throw new Error('Server error. Please try again later.');
                    }
                    else{    
                        throw new Error("Could not fetch.");
                        }
                }
            }
        },
        staleTime: 5 * 60 * 1000
    });
}