import { Input } from '@nextui-org/input'
import React from 'react'
import { SearchIcon } from '../../icons'

const HeroSection = () => {
    return (
        <div className="h-[calc(100vh-64px)] bg-cover bg-center bg-[url('https://res.cloudinary.com/do7nin6oo/image/upload/v1726941331/apocalyptic-landscape-with-war-zone-destruction_q9so8d.jpg')]">
            <Input
                className='max-w-[300px] pt-16 mx-auto'
                startContent={
                    <SearchIcon />
                }
                placeholder='Search items'
            />
            <h1 className='text-4xl text-black text-center font-bold mt-5'>Wanna Find Your Lost Items?</h1>
            <h1 className='text-xl text-black text-center font-bold mt-2'>Now its very easy with Found-X</h1>
        </div>
    )
}

export default HeroSection
