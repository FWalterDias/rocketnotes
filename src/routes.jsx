import { Route, Routes } from 'react-router-dom';
import { Detail } from './pages/Details';


export function MyRouts() {
    return (
        <Routes>
            <Route path='/home' element={<Detail />} />
        </Routes>
    );
}