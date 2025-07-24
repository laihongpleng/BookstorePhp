import { Outlet } from "react-router";
import Footer from "../pages/Footer";
// import Navbar from "../components/Navbar";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const Master = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <Nav />
      
      {/* Main content grows to fill space */}
      <main style={{ flex: '1 0 auto' }} className="main">
        <Outlet />
      </main>
      <Footer></Footer>
     
    </div>
  );
};

export default Master;
