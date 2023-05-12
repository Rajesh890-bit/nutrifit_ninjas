import { Routes,Route } from "react-router-dom";
// import PrivateRoutes from './PrivateRoute';
// import Login from '../Pages/login.jsx';
// import Home from '../Pages/home.jsx';
// import About from '../Pages/about.jsx';
// import Contact from '../Pages/contact.jsx';
// import Users from '../Pages/services.jsx';
import Home from './../pages/Home';

const AllRoutes=()=>{

    return(
     <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/users" element={
      <Users/>
      } />
      <Route path="/login" element={<Login/>} /> */}
    </Routes>
    )

}

export default AllRoutes ;