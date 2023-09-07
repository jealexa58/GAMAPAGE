import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { GrProjects, GrGroup } from 'react-icons/gr'
import { useApi } from '../context/apiContext';



export const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    const { isAuthenticated } = useApi();

    return (
        
        <div>
            <AiOutlineMenu
                onClick={handleNav}
                className='absolute top-4 right-4 z-[99] md:hidden' />
            {nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav}
                        href="#main"
                        className='flex w-[75%] justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </a>
                    <a onClick={handleNav}
                        href="#sobreNosotros"
                        className='flex w-[75%] justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <GrProjects size={20} />
                        <span className='pl-4'>Quienes Somos</span>
                    </a>
                    <a
                        href="/equipo"
                        className='flex w-[75%] justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        < GrGroup size={20} />
                        <span className='pl-4'>Nuestro Equipo</span>
                    </a>
                    <a
                        href="/portafolio"
                        className='flex w-[75%] justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineProject size={20} />
                        <span className='pl-4'>Portafolio</span>
                    </a>
                    <a
                        href="/contactanos"
                        className='flex w-[75%] justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail size={20} />
                        <span className='pl-4'>Contactanos</span>
                    </a>

                </div>
            )
                : (
                    ''
                )}
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className=' flex flex-col'>
                    <a onClick={handleNav}
                        href="/"
                        title='Home'
                        className=' rounded-full shadow-lg bg-violet-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={20} />
                    </a>

                    <a
                        href="/equipo"
                        title='Nuestro Equipo'
                        className=' rounded-full shadow-lg bg-violet-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GrGroup size={20} />
                    </a>
                    <a
                        href="/portafolio"
                        title='Portafolio'
                        className=' rounded-full shadow-lg bg-violet-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineProject size={20} />
                    </a>
                    <a
                        href="/contactanos"
                        title='Contactanos'
                        className=' rounded-full shadow-lg bg-violet-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidenav

