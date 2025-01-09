import { assets } from '@/assets/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Header = ({ isDarkMode }) => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-56'>
            {/* Profile Image */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                className="mt-10">
                <Image src={assets.vin} alt="Vinayaka's Profile" className="rounded-full w-32" />
            </motion.div>

            {/* Introduction */}
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi, I'm Vinayaka <Image src={assets.hand_icon} alt="Hand icon" className="w-6" />
            </motion.h4>

            {/* Title */}
            <motion.h3
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                HCI Researcher and Software Developer.
            </motion.h3>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="max-w-2xl mx-auto font-Ovo">
                I am an HCI Researcher and Software Developer from Boston, USA, with a Master's Degree from Northeastern University, Boston.
            </motion.p>

            {/* Links Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                {/* Contact Me Link */}
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className='px-10 py-3 border border-white rounded-full
                 bg-black text-white flex items-center gap-2 dark:bg-transparent'
                    href="#contact"
                >
                    Contact Me <Image src={assets.right_arrow_white} alt="Right arrow" className="w-4" />
                </motion.a>

                {/* My Resume Link */}
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/vin-resume.pdf"
                    download className='px-10 py-3 border rounded-full
                     border-gray-500 flex items-center gap-2 bg-white dark:text-black'
                >
                    My Resume <Image src={assets.download_icon} alt="Download icon" className="w-4" />
                </motion.a>
            </div>

            {/* Social Links Section */}
            <div className="flex items-center justify-center gap-4 mt-6">
                {/* LinkedIn Link */}
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    href="https://www.linkedin.com/in/vinayaka-h-k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full hover:scale-105 transition duration-300 dark:bg-transparent"
                >
                    <Image src={assets.linkedin} alt="LinkedIn" className="w-4" />
                </motion.a>

                {/* GitHub Link */}
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    href="https://github.com/vinayaka4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center dark:bg-transparent w-8 h-8 border border-gray-500 rounded-full hover:scale-105 transition duration-300"
                >
                    <Image src={isDarkMode ? assets.git_dark : assets.github} alt="GitHub" className="w-4" />
                </motion.a>
            </div>
        </div>
    );
}

export default Header;
