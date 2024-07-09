import Navbar from "@/pages/Home/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default MainLayout;