import React from 'react';
import Navbar from './components/Navbar';
import AllRoutes from './routes/Allroutes';
import logo from './logo/NutriFit_Ninjas-removebg-preview.png'

const App: React.FC = () => {
  const navbarLogo =logo;

  const navbarLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <div className="App">
      <Navbar logo={navbarLogo} links={navbarLinks} />
      <AllRoutes/>
    </div>
  );
};

export default App;
