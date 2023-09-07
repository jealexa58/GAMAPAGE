import { createContext, useContext, useState, useEffect } from "react";
import { registerRequest, loginRequest, verityTokenRequest } from '../apis/api.js'
import Cookies from 'js-cookie';

export const ApiContext = createContext();

export const useApi = () => {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error("useApi debe ser usado dentro de un ApiProvider");
    }
    return context;
};

export const ApiProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);


    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);

        } catch (error) {
            //console.log(error.response);
            setErrors(error.response.data);
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res);
            setIsAuthenticated(true)
            setUser(res.data);
        } catch (error) {
            if(Array.isArray(error.response.data)) {
                return setErrors(error.response.data)
        }
        setErrors([error.response.data.message]);
        }
    };
    
    {/*para eliminar los mensajes de error por despues de un tiempo*/ }
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors]);

    {/*para decirle al servidor que el usuario esta autenticado por medio de la lectura de cookie con 
    js.cookie*/}

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();

            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);
                
            }

            try {
                const res = await verityTokenRequest(cookies.token);
                if (!res.data) { 
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }
                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
                
            }

        }
        checkLogin();
}, []);

return (
    <ApiContext.Provider value={{
        user,
        signup,
        signin,
        isAuthenticated,
        loading,
        errors,
    }}>
        {children}
    </ApiContext.Provider>
)
}