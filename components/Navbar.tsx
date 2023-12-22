'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

interface NavbarProps {
    links: { href: string; label: string; to: string }[];
}

const navbarVariants = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: -50
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [hideNavbar, setHideNavbar] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    let lastScrollY = 0;

    const scrollOffset = -100;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setHideNavbar(true);
            } else {
                setHideNavbar(false);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
            className={`bg-primary navbar-transition fixed w-full z-50 top-0 left-0 px-2 sm:px-4 py-2 drop-shadow ${hideNavbar ? 'navbar-hidden' : ''
                }`}
        >
            <div className="px-3 md:px-12 max-w-7xl container flex flex-wrap items-center justify-between mx-auto">
                <motion.div
                    variants={itemVariants}
                >
                    <Link to="/" className="font-bold text-2xl text-white cursor-pointer">
                        TalentHub
                    </Link>
                </motion.div>
                <motion.button
                    variants={itemVariants}
                    className='md:hidden'
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-menu"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </motion.button>
                <div
                    className={`${mobileMenuOpen ? 'block' : 'hidden'
                        } w-full md:flex md:w-auto md:order-1`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-10 md:mt-0 md:border-0">
                        {links.map(({ href, label, to }) => (
                            <motion.li key={href} className="py-1"
                                variants={itemVariants}
                                transition={{ duration: 0.5 }}>
                                <Link
                                    to={to}
                                    smooth={true}
                                    duration={500}
                                    offset={scrollOffset}
                                    className="block px-3 md:p-0 text-white font-medium hover:text-slate-400 cursor-pointer"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            </motion.li>
                        ))}
                        <motion.button
                            variants={itemVariants}
                            transition={{ duration: 0.5 }} className="relative border-2 border-carrot text-carrot rounded-md bg-transparent px-3 py-1 font-bold text- transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-carrot before:transition-transform before:duration-300 before:content-[''] hover:text-white hover:fon-bold before:hover:scale-x-100">
                            Download
                        </motion.button>
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
