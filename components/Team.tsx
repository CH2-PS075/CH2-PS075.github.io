import React from 'react';
import Avatar from './Avatar';
import Link from 'next/link';

const Team = () => {
    return (
        <>
            <div className="max-w-7xl container mx-auto my-28 px-12 md:px-48">
                <div className="text-center">
                    <h2 className="font-bold text-4xl mb-28">Team Kami</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mb-16 gap-10">
                    <Link
                        href="https://github.com/rafiwew"
                        className="hover:text-android duration-300 ease-in-out"
                    >
                        <Avatar
                            image="/assets/rafi.jpg"
                            name="Muhammad Rafi"
                            role="Mobile Development"
                            color="ring-android"
                        />
                    </Link>
                    <Link
                        href="https://github.com/Epopras"
                        className="hover:text-android duration-300 ease-in-out"
                    >
                        <Avatar
                            image="/assets/epopras.png"
                            name="Epopras Priyo Setia"
                            role="Mobile Development"
                            color="ring-android"
                        />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 gap-10">
                    <Link
                        href="https://github.com/miasetya12"
                        className="hover:text-tensor duration-300 ease-in-out"
                    >
                        <Avatar
                            image="/assets/mia.jpg"
                            name="Putu Mia Setya Utami"
                            role="Machine Learning"
                            color="ring-tensor"
                        />
                    </Link>
                    <Link
                        href="https://github.com/aniszahra"
                        className="hover:text-tensor duration-300 ease-in-out"
                    >
                        <Avatar
                            image="/assets/anis.jpg"
                            name="Anis Zahra Nur Azizah"
                            role="Machine Learning"
                            color="ring-tensor"
                        />
                    </Link>
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <Link
                            href="https://github.com/BangAjus"
                            className="hover:text-tensor duration-300 ease-in-out"
                        >
                            <Avatar
                                image="/assets/gunggus.jpg"
                                name="I Gusti Ngurah Bagus Ferry Mahayudha"
                                role="Machine Learning"
                                color="ring-tensor"
                            />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-col-1 md:grid-cols-2 mb-16 gap-10">
                    <Link
                        href="https://github.com/samuelsntr"
                        className="hover:text-cloud duration-300 ease-in-out"
                    >
                        <Avatar
                            image="/assets/samuel.jpg"
                            name="Meldodi Samuel Sianturi"
                            role="Cloud Computing"
                            color="ring-cloud"
                        />
                    </Link>
                    <Link
                        href="https://github.com/wildanlh"
                        className="hover:text-cloud duration-300 ease-in-out"
                    >
                        <Avatar
                            image="/assets/wildan.jpg"
                            name="Wildan Luqmanul Hakim"
                            role="Cloud Computing"
                            color="ring-cloud"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Team;
