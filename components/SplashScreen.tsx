import Image from 'next/image';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = () => {
    const imageVariants = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
    };

    const textVariants = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
    };

    return (
        <AnimatePresence>
            <div className="h-screen flex flex-col justify-center items-center bg-white">
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={imageVariants}
                    transition={{ duration: 1 }}
                    className="bg-white rounded-full p-8 lg:p-10 aspect-square h-44 lg:h-64"
                >
                    <Image src="/assets/logo.svg" width={200} height={200} alt="logo" />
                </motion.div>
                <motion.h2
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={textVariants}
                    transition={{ duration: 1, delay: 0.3, exit: { duration: 3 } }}
                    className="font-bold text-4xl text-dark md:text-6xl"
                >
                    TalentHub
                </motion.h2>
            </div>
        </AnimatePresence>
    );
};

export default SplashScreen;
