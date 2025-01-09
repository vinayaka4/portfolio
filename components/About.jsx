import { assets, infoList, toolsData } from '@/assets/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="about" className="w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-mt-20 pt-64">
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-lg font-Ovo">
                Introduction
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-3xl sm:text-5xl font-Ovo">
                About me
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20 my-20">

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-64 sm:w-80 rounded-3xl max-w-none flex-shrink-0">
                    <Image src={assets.vin} alt="user image" className="w-full rounded-3xl" />
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo text-justify">
                        Passionate HCI researcher and software developer with a focus on accessibility and emerging technologies like VR, AR, AI, and LLMs. My work centers on designing inclusive, user-centered solutions to address accessibility challenges and empower marginalized communities. I have co-authored research on VR accessibility and am developing a VR training application to support the rehabilitation of formerly incarcerated women. With expertise in frontend development, usability testing, and accessibility research, I aim to leverage technology to drive social impact and democratize innovation.
                    </p>

                    {/* Info List Section */}
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl">
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover
            hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white 
            dark:hover:shadow-white dark:hover:bg-darkHover/50"
                                key={index}
                            >
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                                <p
                                    className="text-gray-600 text-sm dark:text-white/80"
                                    style={{
                                        wordWrap: "break-word",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    {description}
                                </p>
                            </motion.li>
                        ))}
                    </motion.ul>


                    {/* Tools Section */}
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className='my-6 text-gray-700 font-Ovo dark:text-white/80'
                        style={{ fontWeight: 'bold' }}>
                        Tools I use
                    </motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className='flex flex-wrap items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center justify-center w-12 sm:w-14 aspect-square border
                             border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                                key={index}>
                                <Image src={tool} alt="Tool" className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default About;
