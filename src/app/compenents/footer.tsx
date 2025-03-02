import Image from "next/image";
import ubl from "../images/UBL-Logo-01.png"
import payfast from "../images/payfast-logo.png"
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4">
                {/* Top Section - Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-700 pb-8">
                    {/* Pakistan Edhi Centers */}
                    <div>
                        <h3 className="font-semibold mb-4">Pakistan Edhi Centers</h3>
                        <ul className="space-y-2">
                            {["Sindh", "Punjab", "KPK", "Baluchistan", "Azad Jammu Kashmir"].map((item) => (
                                <li key={item} className="text-red-500 hover:underline cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* International Offices */}
                    <div>
                        <h3 className="font-semibold mb-4">International Offices</h3>
                        <ul className="space-y-2">
                            {["USA Office", "Networks", "North America", "United Kingdom"].map((item) => (
                                <li key={item} className="text-red-500 hover:underline cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Activities */}
                    <div>
                        <h3 className="font-semibold mb-4">Activities</h3>
                        <ul className="space-y-2">
                            {[
                                "Destitute Homes",
                                "High Ways Project",
                                "International Community Centers",
                                "Collaboration",
                                "International Activities",
                                "Privacy Policy",
                            ].map((item) => (
                                <li key={item} className="text-red-500 hover:underline cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Payment Partner */}
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-4">Our Payment Partner</h3>
                        <div className="flex flex-col items-center md:items-start space-y-3">
                            <Image src={ubl} alt="UBL Pay" className="h-[130px] w-[200px]" />
                            <Image src={payfast} alt="PayFast" className="h-[70px] w-[180px] rounded-md" />
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="text-center mt-8">
                    <h3 className="font-semibold text-lg mb-4">FOLLOW US ON...</h3>
                    <div className="flex justify-center space-x-3">
                        <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="bg-sky-500 text-white px-6 py-3 rounded hover:bg-sky-600">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">
                            <i className="fab fa-google-plus-g"></i>
                        </a>
                        <a href="#" className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700">
                            <i className="fab fa-pinterest-p"></i>
                        </a>
                        <a href="#" className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 text-center text-gray-400 text-sm">
                    <p>&copy; Copyright 2022 All rights reserved, Edhi Welfare Centre</p>
                    <p className="mt-2">
                        Website Powered by{" "}
                        <a href="#" className="text-blue-400 hover:underline">
                            LiveBits.pk
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
