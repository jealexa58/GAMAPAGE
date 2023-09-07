import { useApi } from "../context/apiContext"
import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute() {
    const {loading, isAuthenticated} = useApi();

    if(loading) return <h1>Loading...</h1>
    if (!loading && !isAuthenticated) return <Navigate to='/login' replace />



    return <Outlet />;
    
}

export default ProtectedRoute