import React from 'react'
interface NavbarProps {
  logo: string;
  links: {
    name: string;
    url: string;
  }[];
}

const Navbar: React.FC<NavbarProps> = ({ logo, links }) => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16 b-1px sloid red">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src={logo} alt="Logo" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;