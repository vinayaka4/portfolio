import { assets } from '@/assets/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = ({ isDarkMode }) => {
    return (
        <div className="mt-20">
            {/* Top Section with Logo and Email */}
            <div className="text-center">
                {/* Logo */}
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" className="w-36 mx-auto mb-4" />

                {/* Email Section */}
                <div className="flex items-center justify-center gap-2">
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="mail icon" className="w-6" />
                    <p className="text-sm">hkvvin@gmail.com</p>
                </div>
            </div>

            {/* Bottom Section with Border, Copyright, and Links */}
            <div className="sm:flex items-center justify-between border-t border-gray-400 mt-12 py-6">
                {/* Copyright Section */}
                <p className="text-center text-sm sm:text-left">
                    © 2025 Vinayak Hk. All rights reserved.
                </p>

                {/* Social Links */}
                <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/vinayaka4"
                            className="hover:underline text-sm"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/vinayaka-h-k/"
                            className="hover:underline text-sm"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
