import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <>
            <div className="h-screen flex justify-center items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <div className="w-full flex justify-center mb-10">
                        <Image src="/assets/logo.svg" width={200} height={200} alt="logo" />
                    </div>
                    <p className="text-7xl font-bold  text-primary">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Page not found
                    </h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/"
                            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-carrot focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carrot duration-300 ease-in-out"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;
