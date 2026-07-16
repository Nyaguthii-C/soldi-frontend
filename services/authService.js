import api from "./api";
import { saveTokens, clearTokens } from "../utils/token";

export async function loginUser(credentials) {

    const response = await api.post("/login/", credentials);

    saveTokens(response.data);

    return response;
}

export function registerUser(data) {
    return api.post("/register/", data);
}

export function logoutUser() {

    clearTokens();

}