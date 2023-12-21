import React from 'react'
import Image from 'next/image'

interface AvatarProps {
    image: string;
    name: string;
    role: string;
    color: string;
}

const Avatar: React.FC<AvatarProps> = ({ image, name, role, color }) => {
    return (
        <div className='flex flex-col space-y-10 items-center justify-center'>
            <Image src={image}
                width={180}
                height={180}
                alt="poster"
                className={`aspect-square rounded-full object-cover ring-offset-8 ring-4 ${color}`}
            />
            <div className='text-center'>
                <h2 className="font-bold text-xl">{name}</h2>
                <p>{role}</p>
            </div>
        </div>
    )
}

export default Avatar