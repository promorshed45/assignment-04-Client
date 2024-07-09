import Navbar from '@/pages/Home/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>

        </>
    );
};

export default Root;