import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Sidenav from '../components/Sidenav';
import QuienesSomos from '../components/QuienesSomos';
import Footer from '../components/Footer';



const HomePage = () => {
    return (
        <div>

            <div id='main'>
                <img
                    className='w-full h-screen object-cover object-left'
                    src="https://img.freepik.com/foto-gratis/hombre-tiro-medio-gafas-vr_23-2150603803.jpg?w=900&t=st=1693248902~exp=1693249502~hmac=02cd3142d5dc44eddbe741aea02eb5c83c255882f666ebfebb909b4c8ea9b788"
                    alt='/'
                />
                <div className='w-full h-screen absolute top-0 bg-white/50'>
                    <div className='max-w-[700px] m-auto h-full justify-center flex flex-col  lg:items-start items-center'>
                        <h1 className=' justify-center sm:text-5xl text-4xl font-bold text-gray-800'>Para GaMa </h1>
                        <h2 className=' flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                            Tus datos son
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'transformados en mejores decisiones.',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'el futuro nosotros lo construimos.',
                                    1000,

                                ]}
                                wrapper='div'
                                cursor={true}
                                style={{ fontSize: '1em', paddingLeft: '5px' }}
                                repeat={Infinity}
                            />
                        </h2>
                        <div className=' flex justify-between pt-6 max-w-[200px] w-full'>
                            <FaTwitter className='cursor-pointer' size={20} />
                            <FaFacebookF className='cursor-pointer' size={20} />
                            <FaInstagram className='cursor-pointer' size={20} />
                            <FaLinkedinIn className='cursor-pointer' size={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <QuienesSomos />
            </div>
        </div>

    );
}

export default HomePage