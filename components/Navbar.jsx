import { assets } from '@/assets/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMOde }) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'; // Bring into view
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'; // Hide off-screen
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup listener
        };
    }, []);

    return (
        <>
            {/* Background */}
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <Image src={assets.header_bg_color} alt="background" className="w-full" />
            </div>

            {/* Navbar */}
            <nav
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center 
                    justify-between z-50 ${isScroll ? "bg-white backdrop-blur-lg shadow-sm  dark:bg-darkTheme dark:shadow-white/20" : ""
                    }`}
            >
                <a href="#top">
                    <Image src={isDarkMode ? assets.logo_dark : assets.logo} className="w-28 cursor-pointer mr-14" alt="logo" />
                </a>

                {/* Desktop Menu */}
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8
                     rounded-full px-12 py-3${isScroll ? "" : " bg-white bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    <li><a href="#top" className="font-Ovo">Home</a></li>
                    <li><a href="#about" className="font-Ovo">About me</a></li>
                    <li><a href="#experiences" className="font-Ovo">Experiences</a></li>
                    <li><a href="#volunteer" onClick={closeMenu} className="font-Ovo">Volunteer</a></li>
                    <li><a href="#services" className="font-Ovo">Services</a></li>
                    <li><a href="#work" className="font-Ovo">My work</a></li>
                    <li><a href="#contact" className="font-Ovo">Contact me</a></li>
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button onClick={() => setIsDarkMOde(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="moon" className="w-6" />
                    </button>
                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5
                         border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
                    >
                        Contact

                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="arrow" className="w-3" />
                    </a>
                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="menu" className="w-6" />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul
                    ref={sideMenuRef}
                    className={`fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen flex flex-col gap-4 py-20 px-10
        bg-rose-50 text-gray-900 transition duration-500 dark:bg-darkHover dark:text-white`}
                >
                    <div
                        className="absolute right-6 top-6 cursor-pointer"
                        onClick={closeMenu}
                    >
                        <Image src={assets.close_black} alt="close" className="w-5 dark:invert" />
                    </div>
                    {/* <ul className='dark:bg-darkHover dark:text-white'
                    ref={sideMenuRef}
                    style={{
                        position: 'fixed',
                        right: '-16rem', // Initially off-screen
                        top: 0,
                        bottom: 0,
                        width: '16rem',
                        height: '100vh',
                        backgroundColor: '#ffe4e6', // Rose-50
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        padding: '5rem 1.25rem',
                        zIndex: 50,
                        transition: 'transform 0.5s ease-in-out',
                        transform: 'translateX(16rem)', // Default hidden state
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            right: '1.5rem',
                            top: '1.5rem',
                            cursor: 'pointer',
                        }}
                        onClick={closeMenu}
                    >
                        <Image src={assets.close_black} alt="close" className="w-5" />
                    </div> */}
                    <li><a href="#top" onClick={closeMenu} className="font-Ovo">Home</a></li>
                    <li><a href="#about" onClick={closeMenu} className="font-Ovo">About me</a></li>
                    <li><a href="#experiences" onClick={closeMenu} className="font-Ovo">Experiences</a></li>
                    <li><a href="#volunteer" onClick={closeMenu} className="font-Ovo">Volunteer</a></li>
                    <li><a href="#services" onClick={closeMenu} className="font-Ovo">Services</a></li>
                    <li><a href="#work" onClick={closeMenu} className="font-Ovo">My work</a></li>
                    <li><a href="#contact" onClick={closeMenu} className="font-Ovo">Contact me</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
