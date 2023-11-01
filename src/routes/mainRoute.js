import { Registration } from "../pages/registrationForm";
import { LogIn } from "../pages/logIn";
import { MainList } from "../pages/mainList";
import { BrowserRouter, Outlet, Route, Routes, } from 'react-router-dom';

export const MainRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Registration />} />
                <Route path='/registrationForm.js' element={<Registration />} />
                <Route path='/logIn.js' element={<LogIn />} />
                <Route path='/mainList.js' element={<MainList />} />
            </Routes>
            <Outlet><div></div></Outlet>
        </BrowserRouter>
    )

}