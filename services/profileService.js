import api from "./api";

export const getProfile = () => {
    return api.get("/profile/");
};

export const updateProfile = (data) => {
    return api.patch("/profile/update/", data);
};