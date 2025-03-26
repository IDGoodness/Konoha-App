import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import UserDropdown from "./UserDropdown";
import { useAuth } from "../context/AuthContext";





const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const { user } = useAuth();

    return (
        <>
            <nav className="block w-full px-4 py-2 mx-auto bg-white shadow-xs rounded-md lg:px-1 lg:py-3 mt-2">
                <div className="container flex flex-wrap items-center justify-between mx-auto ">
                    <Link to={"/"} className="mr-10 block cursor-pointer py-1">
                        <img src={logo} alt="Logo" className="w-28 " />
                    </Link>

                    <div className="hidden lg:block">
                        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <li className="flex items-center p-1 text-lg gap-x-2 text-slate-600">
                                <Link to={"/courses"} className="flex items-center">
                                    Courses
                                </Link>
                            </li>
                            <li className="flex items-center p-1 text-lg gap-x-2 text-slate-600">
                                <Link to={"/ask"} className="flex items-center">
                                    Ask Konoha GPT
                                </Link>
                            </li>
                            <li className="flex items-center p-1 text-lg gap-x-2 text-slate-600">
                                <Link to={"/flash"} className="flex items-center">
                                    FlashCards
                                </Link>
                            </li>
                            <li className="flex items-center p-1 text-lg gap-x-2 text-slate-600">
                                <Link to={"/test"} className="flex items-center">
                                    Practice Tests
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="hidden lg:flex gap-4">
                        {!user ? (
                                <Link to={"/signup"} className="block cursor-pointer py-1 bg-kOrange hover:bg-orange-500 text-white rounded-md">
                                    <button className="w-40 py-2 text-lg font-semibold text-white">
                                        Sign Up/ Sign In
                                    </button>
                                </Link>
                            ) : (
                                <UserDropdown />
                            )
                        }
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
                                <Link to={"/courses"} className="flex items-center">
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
                            <li className="flex items-center p-1 text-lg gap-x-2 " >
                                {!user ? (
                                        <Link to={"/signup"} className="block cursor-pointer py-1 bg-kOrange hover:bg-orange-500 text-white rounded-md">
                                            <button className="w-32 py-2 text-lg font-semibold text-white">
                                                Sign Up/Sign Up
                                            </button>
                                        </Link>
                                    ) : (
                                        <UserDropdown />
                                    )
                                }
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;