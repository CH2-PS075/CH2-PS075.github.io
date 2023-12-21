import Image from 'next/image'
import React from 'react'
import backgroundImage from '../public/assets/background.svg';

const Start = () => {
    return (
        <div
            className="relative w-full h-screen bg-fixed bg-no-repeat bg-cover bg-primary"
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
        >
            <div className="max-w-7xl px-12 container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bor">
                <div className="grid grid-cols-2 gap-10 lg:gap-2 justify-items-center text-white px-3">
                    <div className="flex flex-col justify-center h-full lg:col-span-1 col-span-full text-center lg:text-left">
                        <h2 className="font-light text-lg md:text-xl">
                            Selamat datang di
                        </h2>
                        <h2 className="font-bold text-4xl md:text-6xl">TalentHub</h2>
                        <p className="font-light text-sm md:text-base">
                            Aplikasi yang buat acaramu lebih nyaman. Siap bantu kebutuhanmu,
                            kapan pun, di mana pun.
                        </p>
                    </div>
                    <div className="flex lg:justify-self-end h-full lg:col-span-1 col-span-full">
                        <div className="bg-white rounded-full p-8 lg:p-10 aspect-square h-44 lg:h-64">
                            <Image
                                src="/assets/logo.svg"
                                width={200}
                                height={200}
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start