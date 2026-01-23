import {useQuery} from "@tanstack/react-query";
import axios from 'axios'
import type { ITimeWindow } from "../type/ITimeWindow";

export const useFetchTimeWindow = (timeWindowSize : number) =>{
    return useQuery({
        queryKey: ['time-window', timeWindowSize],
        queryFn: async () => {
            const response = await axios.get<ITimeWindow>('http://localhost:8080/api/v1/time-window?size=' + timeWindowSize, {"timeout": 5000});
            return response.data;
        },
        staleTime: 5 * 60 * 1000
    });
}