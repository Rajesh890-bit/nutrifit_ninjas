import React from 'react'

const Footer = () => {
    
    return (
        <footer className="bg-gray-900">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center -mx-2">
                    <div className="p-2">
                        <a href="#" className="text-gray-300 hover:text-white">Home</a>
                    </div>
                    <div className="p-2">
                        <a href="#" className="text-gray-300 hover:text-white">About</a>
                    </div>
                    <div className="p-2">
                        <a href="#" className="text-gray-300 hover:text-white">Services</a>
                    </div>
                    <div className="p-2">
                        <a href="#" className="text-gray-300 hover:text-white">Doctors</a>
                    </div>
                    <div className="p-2">
                        <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                    </div>
                </div>
                <div className="mt-4 text-center text-gray-300">
                    &copy; 2023 Healthcare Website. All rights reserved.
                </div>
            </div>
        </footer>

    )
}

export default Footer