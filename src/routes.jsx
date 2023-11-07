import { Route, Routes } from 'react-router-dom';
import { Detail } from './pages/Detail';


export function MyRouts() {
    return (
        <Routes>
            <Route path='/home' element={<Detail />} />
        </Routes>
    );
}