import React from 'react'

import Sidenav from '../components/Sidenav';
import Footer from '../components/Footer';


const EqupoPage = () => {
  return (
    <div>
      <section className="relative block h-[30vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/Imagenes/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-white/30 bg-cover bg-center" />
      </section>

      <section className="relative bg-blue-gray-50/50 py-48 px-10">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">

              <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12 xl:px-32">
                  <div className="mb-16 text-center">
                    <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Nuestro Equipo</h2>
                    <p className="text-gray-600 lg:w-8/12 lg:mx-auto">Perfil de los profesionales que contribuyen en el proceso de la empresa en la construcción de un equipo, un posicionamiento y reconocimiento.</p>
                  </div>
                  <div className="grid gap-12 items-center md:grid-cols-3">
                    <div className="space-y-4 text-center">
                      <img className='w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64'
                        src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671132.jpg?w=740&t=st=1693347320~exp=1693347920~hmac=07d38451f9d54fd77bae497af820af99b16fa661a52438ebfa9154745072ede3" alt="woman" loading="lazy" width="640" height="805" />

                      <div>
                        <h4 className="text-2xl">Hentoni Doe</h4>
                        <span className="block text-sm text-gray-500">Data Science Consultant</span>
                      </div>
                    </div>
                    <div className="space-y-4 text-center">
                      <img className='w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64'
                        src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?w=740&t=st=1693346819~exp=1693347419~hmac=0a5b4d96bea4287e7fe0bd969971fe492ba90987cae4469e88dbd908709bf811" alt="man" loading="lazy" width="1000" height="667" />
                      <div>
                        <h4 className="text-2xl">Yosimar Díaz</h4>
                        <span className="block text-sm text-gray-500">CEO-Founder and Statistical Consultant</span>
                      </div>
                    </div>
                    <div className="space-y-4 text-center">
                      <img className='w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64'
                        src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671140.jpg?w=740&t=st=1693346828~exp=1693347428~hmac=1e0fc58161b26881c1c0c613e658b6503a7b08114fb747847264f2eb9eae5045" alt="man" loading="lazy" width="1000" height="667" />
                      <div>
                        <h4 className="text-2xl">Alexandra Arias</h4>
                        <span className="block text-sm text-gray-500">Developer Consultant </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EqupoPage