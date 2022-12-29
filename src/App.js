import './App.css';
import Navbar from './component/Navbar';
import { Route , Routes} from "react-router-dom";
// import Footer from './component/Footer';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import Servic from './component/Servic';
import ContactUs from './component/ContactUs';
import Case_study from './component/Case_study';
import Blogs from './component/Blogs';


function App() {
  return (
    <div>
      <div className='App'>
      <Navbar/>
        {/* <Home/>
        <Navbar/>
        <Footer/>
        <AboutUs/>
        <Servic/>
        <Case_study/>
        <Blogs/>
        <ContactUs/> */}
        <Routes>
        <Route  path="/" element={<Home />} />
          <Route  path="/Blogs" element={<Blogs />} />
          <Route  path="/Case_study" element={<Case_study />} />
          <Route  path="/About Us" element={<AboutUs />} />
          <Route  path="/Services" element={<Servic />} />
          <Route  path="/Contact Us" element={<ContactUs />} />   
      </Routes>
      </div>
    </div>
  );
}

export default App;
