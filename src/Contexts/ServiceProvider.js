import { createContext } from "react";
import useServices from "../Utilites/CustomHooks/useServices";

export const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
    const allServiceContext = useServices();
    return (
        <ServiceContext.Provider value={allServiceContext}>
            {children}
        </ServiceContext.Provider>
    );
};

export default ServiceProvider;