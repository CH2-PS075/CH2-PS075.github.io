import Image from 'next/image';
import React from 'react';

interface CardProps {
    image: string;
    title: string;
    desc: string;
}

const Card: React.FC<CardProps> = ({ image, title, desc }) => {
    return (
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 w-24 rounded-xl aspect-square bg-carrot bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <Image
                    src={image}
                    width={400}
                    height={400}
                    alt="poster"
                    className="w-32 p-6 aspect-square invert"
                />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block text-xl font-bold text-dark">{title}</h5>
                <p className="block">{desc}</p>
            </div>
        </div>
    );
};

export default Card;
