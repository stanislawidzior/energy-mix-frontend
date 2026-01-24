const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;;

export const API_CONFIG = {
  baseURL: API_BASE_URL,
  endpoints: {
    energyMix: `${API_BASE_URL}/api/v1/energy-mix`,
    timeWindow: `${API_BASE_URL}/api/v1/time-window`,
  },
  timeout: 5000,
};
