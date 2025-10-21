
import { Outlet } from "react-router";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#0a1429] flex flex-col">
      <Navbar />
      <main className="flex-grow mt-20 max-w-7xl mx-auto w-full px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
