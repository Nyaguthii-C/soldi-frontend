const ACCESS = "expense_access";
const REFRESH = "expense_refresh";

export const saveTokens = ({ access, refresh }) => {
    localStorage.setItem(ACCESS, access);
    localStorage.setItem(REFRESH, refresh);
};

export const getAccessToken = () => {
    return localStorage.getItem(ACCESS);
};

export const getRefreshToken = () => {
    return localStorage.getItem(REFRESH);
};

export const clearTokens = () => {
    localStorage.removeItem(ACCESS);
    localStorage.removeItem(REFRESH);
};
