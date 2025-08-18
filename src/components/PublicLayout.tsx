import { Route, Routes } from "react-router";
import Navbar from "./partials/Navbar";
import HomePage from "@/pages/landing";
import Footer from "./partials/Footer";
import { SidebarProvider } from "./ui/sidebar";
import MobileSidebar from "./partials/MobileSidebar";

const PublicLayout = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <MobileSidebar />
      <div className="w-full">
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default PublicLayout;
