import { createContext, useContext, useState } from "react";
import { createDateRequest, getDatesRequest } from "../apis/dates";

const DateContext = createContext();

export const useDates = () => {
    const context = useContext(DateContext);

    if (!context) {
        throw new Error("useDate must be used within a DateProvider");
    }

    return context;
}

export function DateProvider({ children }) {

    const [dates, setDates] = useState([]);

    const getDates = async () => {
        try {
            const res = await getDatesRequest();
            setDates(res.data);
        } catch (error) {
            console.log(error);
        }

    };

    const createDate = async (date) => {
        const res = await createDateRequest(date);
        console.log(res);
    };


    return (
        <DateContext.Provider value={{
            dates,
            createDate,
            getDates,

        }}>
            {children}
        </DateContext.Provider>
    );
}