import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
