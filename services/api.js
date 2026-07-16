import axios from "axios";
import { getAccessToken, getRefreshToken, saveTokens, clearTokens } from "../utils/token";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically add access token to Auth header for each request
api.interceptors.request.use((config) => {

    const token = getAccessToken();

    if (token) {

        config.headers.Authorization = `Bearer ${token}`;

    }

    return config;

});


// Automatically refresh access token if expired and retry the request
api.interceptors.response.use(
    (response) => response,

    async (error) => {

        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {

            originalRequest._retry = true;

            try {

                const refresh = getRefreshToken();

                const response = await axios.post(
                    `${import.meta.env.VITE_API_BASE_URL}/token/refresh/`,
                    {
                        refresh,
                    }
                );

                const access = response.data.access;

                saveTokens({
                    access,
                    refresh,
                });

                originalRequest.headers.Authorization =
                    `Bearer ${access}`;

                return api(originalRequest);

            } catch (err) {

                clearTokens();

                window.location.href = "/";

            }

        }

        return Promise.reject(error);

    }
);

export default api;