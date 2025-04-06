
import { assets } from '@/assets/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const Volunteer = ({ isDarkMode }) => {
    const volunteerActivities = [
        {
            title: 'VR Blogger',
            description: 'I share accessible technology insights and advocate for inclusive design through VR-focused blogs that promote HCI and social impact.',
            icon: assets.vr, // you can use a custom blog icon here if available
            dark_icon: assets.vr_dark,
        },
        {
            title: 'CHI LBW Reviewer',
            description: 'Served as a peer reviewer for Late-Breaking Work submissions at CHI. Provided constructive feedback and supported the research community.',
            icon: assets.edu_icon,
            dark_icon: assets.edu_icon_dark
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="volunteer"
            className='w-full px-[12%] py-10 scroll-mt-20'
        >
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'
            >
                Giving Back
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'
            >
                Volunteer Work
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-auto gap-6 mt-10'
            >
                {volunteerActivities.map((activity, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={index}
                        className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer
                         hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
                    >
                        <Image src={isDarkMode ? activity.dark_icon : activity.icon} alt={activity.title} className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{activity.title}</h3>
                        <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                            {activity.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Volunteer;
