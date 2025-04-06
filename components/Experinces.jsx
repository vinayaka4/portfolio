import { assets } from '@/assets/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const Experiences = ({ isDarkMode }) => {
    const experiences = [
        {
            title: 'Frontend Developer',
            description: 'Working as Front end developer at MAXWOOD FURNITURE. Developing and maintaining user-friendly E-commerce web applications using Shopify, Liquid, HTML, CSS, and JavaScript. Collaborating with cross-functional teams to deliver high-quality software solutions.',
            icon: assets.coding,
            dark_icon: assets.coding_dark,
        },
        {
            title: 'Teaching Assistant',
            description: 'Assisted in teaching Web Development at Northeastern University. Guided students through complex coding assignments and enhanced their learning experience.',
            icon: assets.edu_icon,
            dark_icon: assets.edu_icon_dark
        },
        {
            title: 'Research Assistant',
            description: 'Collaborated on a VR accessibility project to make immersive technologies more inclusive for disabled users. Contributed to a CHI publication.Worked on VR based training for formerly Incarcerated women',
            icon: assets.vr,
            dark_icon: assets.vr_dark
        },
        {
            title: 'Frontend Developer and HCI Intern',
            description: 'Worked as Front end Intern and  as HCI intern. Conducted a usability study and implemented design improvements at MoneyHop, increasing usability by 40%.',
            icon: assets.coding,
            dark_icon: assets.coding_dark,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="experiences"
            className='w-full px-[12%] py-10 scroll-mt-20'
        >
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'
            >
                My Journey
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'
            >
                Experiences
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-auto gap-6 mt-10'
            >
                {experiences.map((experience, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={index}
                        className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer
                         hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
                    >
                        <Image src={isDarkMode ? experience.dark_icon : experience.icon} alt={experience.title} className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{experience.title}</h3>
                        <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                            {experience.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default Experiences;
