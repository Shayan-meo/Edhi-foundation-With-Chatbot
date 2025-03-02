"use client"

import logo from "../images/logo.png"
import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navLinks = [
        { name: "HOME", href: "#" },
        { name: "ABOUT ▾", href: "#" },
        { name: "SERVICES ▾", href: "#" },
        { name: "RESOURCES ▾", href: "#" },
        { name: "DONATE US ▾", href: "#" },
        { name: "ACTIVITIES ▾", href: "#" },
        { name: "MEDIA ▾", href: "#" },
        { name: "CONTACT US ▾", href: "#" },
    ];

    return (
        <nav className="bg-white border-b border-gray-200">
            {/* Top Green Bar */}
            <div className="w-full bg-green-600 h-8"></div>

            {/* Logo + Buttons */}
            <div className="container mx-auto flex justify-between items-center py-3 px-4 lg:px-8">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <Image src={logo} alt="Edhi Logo" width={250} height={250} />
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex space-x-2">
                    <button className="bg-green-600 text-white px-6 py-4 text-sm font-bold">
                        EMERGENCY CALL 115
                    </button>
                    <button className="bg-red-600 text-white px-6 py-4 text-sm font-bold">
                        DONATE NOW
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Buttons (only show on small screens when menu open) */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center space-y-2 py-2 bg-gray-100">
                    <button className="bg-green-600 text-white px-4 py-2 text-sm font-bold rounded w-full">
                        EMERGENCY CALL 115
                    </button>
                    <button className="bg-red-600 text-white px-4 py-2 text-sm font-bold rounded w-full">
                        DONATE NOW
                    </button>
                </div>
            )}

            {/* Links Section */}
            <div className={`border-t border-gray-200 ${menuOpen ? "block" : "hidden"} md:block`}>
                <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-center items-center py-2 space-y-2 md:space-y-0 md:space-x-12 text-sm font-semibold">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="hover:text-green-600 transition text-gray-500"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
