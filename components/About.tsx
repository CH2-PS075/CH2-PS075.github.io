import Image from 'next/image';
import React from 'react';
import Card from './Card';
import backgroundImage from '../public/assets/mockup-talenthub.svg';
import Link from 'next/link';

const About = () => {
    return (
        <>
            <div className="max-w-7xl container mx-auto my-28 px-10 md:px-20 lg:px-48 block md:flex lg:block">
                <div className="md:text-left lg:text-center md:w-1/2 lg:w-full">
                    <h2 className="font-bold text-4xl mb-5">Apa itu TalentHub?</h2>
                    <p className="text-sm md:text-base mb-10 pr-6 lg:p-0">
                        <b>TalentHub</b> adalah sebuah aplikasi yang digunakan untuk membantu para
                        talenta musik lokal untuk mempromosikan diri mereka sendiri.
                        Sehingga, mereka mendapatkan tawaran pekerjaan dan membantu para
                        pencari bakat, khususnya pencari bakat musik, untuk menemukan
                        penyanyi yang sesuai dengan keinginan mereka. Baik dari segi harga,
                        genre, lokasi, dan jenis talenta.
                    </p>
                </div>
                <div className="flex md:w-1/2 lg:w-full justify-center">
                    <Image
                        src="/assets/poster-talenthub.png"
                        width={400}
                        height={400}
                        alt="poster"
                        className="rounded-3xl p-2 lg:p-0"
                    />
                </div>
            </div>
            <div
                className="bg-primary py-24 bg-fixed bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${backgroundImage.src})` }}
            >
                <div className="max-w-7xl container mx-auto md:px-32">
                    <div className="text-center mb-28">
                        <h2 className="font-bold text-4xl mb-5 text-white">
                            Fitur Aplikasi
                        </h2>
                    </div>
                    <div className="grid grid-cols-3 gap-10 pb-20">
                        <div className='col-span-full lg:col-span-1 flex justify-center'>
                            <Card
                                image="/assets/icon-face.svg"
                                title="Verifikasi Wajah"
                                desc="Memudahkan proses registrasi talent dengan menggunakan validasi wajah dengan cepat."
                            />
                        </div>
                        <div className='col-span-full lg:col-span-1 flex justify-center'>
                            <Card
                                image="/assets/icon-robot.svg"
                                title="ChatBot"
                                desc="User mendapatkan jawaban tentang talenta dengan cepat menggunakan fitur chatbot."
                            />
                        </div>
                        <div className='col-span-full lg:col-span-1 flex justify-center'>
                            <Card
                                image="/assets/icon-user-search.svg"
                                title="Rekomendasi Talent"
                                desc="Membantu pengguna menemukan talent yang mereka cari dengan fitur rekomendasi yang kami miliki."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-smoke pt-14 pb-13 text-dark">
                <div className="max-w-7xl container mx-auto grid grid-cols-3 px-16">
                    <Link
                        href="https://github.com/orgs/CH2-PS075/repositories"
                        className="flex h-24 justify-center items-center px-0 mx-0 opacity-50 hover:opacity-100 duration-300 ease-in-out col-span-full lg:col-span-1 mb-10 lg:0"
                    >
                        <Image
                            src="/assets/logo-android.svg"
                            width={400}
                            height={400}
                            alt="poster"
                            className="w-36 aspect-square mb-7"
                        />
                        <h2 className="font-bold text-xl">Mobile Development</h2>
                    </Link>

                    <Link
                        href="https://github.com/orgs/CH2-PS075/repositories"
                        className="flex h-24 justify-center items-center px-0 mx-0 opacity-50 hover:opacity-100 duration-300 ease-in-out col-span-full lg:col-span-1 mb-10 lg:0"
                    >
                        <Image
                            src="/assets/logo-tensorflow.svg"
                            width={400}
                            height={400}
                            alt="poster"
                            className="w-28 aspect-square"
                        />
                        <h2 className="font-bold text-xl">Machine Learning</h2>
                    </Link>

                    <Link
                        href="https://github.com/orgs/CH2-PS075/repositories"
                        className="flex h-24 justify-center items-center px-0 mx-0 opacity-50 hover:opacity-100 duration-300 ease-in-out col-span-full lg:col-span-1 mb-10 lg:0"
                    >
                        <Image
                            src="/assets/logo-cloud.svg"
                            width={400}
                            height={400}
                            alt="poster"
                            className="w-32 p-6 aspect-square"
                        />
                        <h2 className="font-bold text-xl">Cloud Computing</h2>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default About;
