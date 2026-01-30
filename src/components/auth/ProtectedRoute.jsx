import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("loggedUser"))
    return user ? children : <Navigate to="/login" />
}

export default ProtectedRoute
