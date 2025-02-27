import React, { useState } from 'react'
import moon from '/moonImages (2).jpeg'
import img from '/GettyImages-911199570-c7347dab092841efac74925488146989.jpg'
import '../headStyle/head.css'

const NavBar = () => {
    const [dropdown, setDropdown] = useState(false);

    const toggle = () => {
        setDropdown(!dropdown);
    };

    return (
        <div className="bg-blue-700 text-white">
            <header className="">
                <nav className="flex justify-between items-center p-4">
                    
                    <div className="flex items-center">
                        <i className="fa-solid fa-moon text-2xl"></i>
                        <p className="ml-2 text-lg">Jobseeker</p>
                    </div>

                    
                    <div onClick={toggle} className="lg:hidden cursor-pointer text-2xl relative z-50">
                        {dropdown ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                    </div>

                    <div className="hidden lg:flex flex-row gap-8">
                        <div className="flex flex-row gap-6">
                            <div className="flex gap-2">
                                <i className="fa-solid fa-location-dot mt-1"></i>
                                <p>Felosa Drive, Los Angeles</p>
                            </div>
                            <p>Find Job</p>
                            <p>My Job</p>
                            <p>Hiring</p>
                        </div>
                        <div className="flex gap-4 mt-1">
                            <i className="fa-solid fa-gear"></i>
                            <i className="fa-solid fa-bell"></i>
                        </div>
                    </div>
                </nav>

                <div
                    className={`fixed top-0 left-0 w-[100%] h-[50vh] bg-blue-700 py-8 px-4 text-white flex flex-col gap-6 transition-all duration-500 ease-in-out lg:hidden ${
                        dropdown ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <i className="fa-solid fa-location-dot mt-1"></i>
                            <p>Felosa Drive, Los Angeles</p>
                        </div>
                        <p>Find Job</p>
                        <p>My Job</p>
                        <p>Hiring</p>
                    </div>
                    <div className="flex gap-4">
                        <i className="fa-solid fa-gear"></i>
                        <i className="fa-solid fa-bell"></i>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavBar;