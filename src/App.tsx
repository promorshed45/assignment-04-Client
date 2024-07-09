import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./pages/Home/Navbar";
import Footer from "./pages/Home/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
