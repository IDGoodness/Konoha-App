import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="block bg-kOrange w-full px-4 py-2 mx-auto bg-white shadow-xs rounded-md lg:px-1 lg:py-3 mt-2">
                <div className="container flex flex-wrap items-center justify-between mx-auto ">
                    <Link to={"/"} className="mr-10 block cursor-pointer py-1">
                        <img src={logo} alt="Logo" className="w-28 " />
                    </Link>

                    <div className="hidden lg:block">
                        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <li className="flex items-center p-1 text-lg gap-x-2 text-slate-600">
                                <Link to={"/"} className="flex items-center">
                                    Courses
                                </Link>
                            </li>
                            <li className="flex items-center p-1 text-lg gap-x-2 text-slate-600">
                                <Link to={"/"} className="flex items-center">
                                    Ask Konoha GPT
                                </Link>
                            </li>
                            <li className="flex items-center p-1 text-lg gap-x-2 text-slate-600">
                                <Link to={"/"} className="flex items-center">
                                    FlashCards
                                </Link>
                            </li>
                            <li className="flex items-center p-1 text-lg gap-x-2 text-slate-600">
                                <Link to={"/"} className="flex items-center">
                                    Practice Tests
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="items-center hidden gap-x-2 lg:flex">
                        <div className="w-full max-w-sm min-w-[200px]">
                            <div className="relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    className="w-full pl-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                    placeholder="Type here..."
                                />
                            </div>
                        </div>

                        <button
                            className="rounded-md bg-kOrange py-2 px-4 border border-transparent text-center text-lg text-white transition-all shadow-md hover:shadow-lg hover:bg-kPink"
                            type="button"
                        >
                            Search
                        </button>
                    </div>

                    <button
                        className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                        type="button"
                        onClick={toggleMobileMenu}
                    >
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="lg:hidden">
                        <ul className="flex flex-col gap-2 mt-2 mb-4 items-center lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <li className="flex items-center p-1 text-lg gap-x-2 text-slate-600">
                                <Link to={"/"} className="flex items-center">
                                    Courses
                                </Link>
                            </li>
                            <li className="flex items-center p-1 text-lg gap-x-2 text-slate-600">
                                <Link to={"/"} className="flex items-center">
                                    Ask Konoha GPT
                                </Link>
                            </li>
                            <li className="flex items-center p-1 text-lg gap-x-2 text-slate-600">
                                <Link to={"/"} className="flex items-center">
                                    FlashCards
                                </Link>
                            </li>
                            <li className="flex items-center p-1 text-lg gap-x-2 text-slate-600">
                                <Link to={"/"} className="flex items-center">
                                    Practice Tests
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;