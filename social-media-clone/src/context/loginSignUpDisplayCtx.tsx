import { useOutletContext } from "react-router-dom";

export const setLoginSignUpDisplay = () => {
    return useOutletContext<() => void>();
};