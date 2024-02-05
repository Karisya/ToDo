import { Registration } from "../pages/registrationForm";
import { LogIn } from "../pages/logIn";
import { MainList } from "../pages/mainList";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuth = localStorage.getItem('token') ? true : false;
    return isAuth ? <>{children}</> : <Navigate to="/login" />;
};

export const MainRoute = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Registration />} />
                <Route path='/registrationForm' element={<Registration />} />
                <Route path='/logIn' element={<LogIn />} />
                <Route path='/mainList' element={<PrivateRoute><MainList /></PrivateRoute>} />
            </Routes>
        </Router>
    )

}