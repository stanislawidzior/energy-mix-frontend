import {useQuery} from "@tanstack/react-query";
import axios from 'axios'
import type { ITimeWindow } from "../type/ITimeWindow";

export const useFetchTimeWindow = (timeWindowSize : number) =>{
    return useQuery({
        queryKey: ['time-window', timeWindowSize],
        queryFn: async () => {
            try{
            const response = await axios.get<ITimeWindow>('http://localhost:8080/api/v1/time-window?size=' + timeWindowSize, {"timeout": 5000});
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