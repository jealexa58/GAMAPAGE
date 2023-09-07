import React from 'react'
import Sidenav from '../components/Sidenav';
import Footer from '../components/Footer';

const PortafolioPage = () => {
  return (
    <div>


      <section className="relative block h-[30vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1692356573087-00b545ac4694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-white/30 bg-cover bg-center" />
      </section>

      <section className="relative bg-blue-gray-50/50 py-48 px-10">
        <div className="container mx-auto">
          <div className="relative -mt-72 flex w-full min-w-0 flex-col break-words rounded-3xl bg-gray-50 shadow-xl shadow-gray-500/5">
            <div className=" px-10 py-16">

              <div className=" py-11 container mx-auto px-6 md:px-12 xl:px-32 text-center">
                <h2 className="mb-4 text-center text-2xl text-purple-900 font-bold md:text-4xl">Portafolio</h2>
                <p className="py-3 text-gray-600 lg:w-20/12 lg:mx-auto">Bienvenido a nuestro portafolio, donde la información se convierte en conocimiento y los datos cobran vida. En GAMA E&D, queremos ser líderes en el campo del análisis y desarrollo de datos, transformando la complejidad en claridad y brindando soluciones inteligentes para los desafíos empresariales más exigentes.</p>
              </div>

              
                <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                  <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">

                    <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                      <div class="mb-12 space-y-4">
                        <h3 class="text-2xl font-semibold text-purple-900">Análisis de encuestas</h3>
                        <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                        <a href="#" class="block font-medium text-purple-600">Know more</a>
                      </div>
                      <img src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg" class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
                    </div>

                    <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                      <div class="mb-12 space-y-4">
                        <h3 class="text-2xl font-semibold text-purple-900">Desarrollo de Dashboard</h3>
                        <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                        <a href="#" class="block font-medium text-purple-600">Know more</a>
                      </div>
                      <img src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg" class="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600"/>
                    </div>

                    <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                      <div class="mb-12 space-y-4">
                        <h3 class="text-2xl font-semibold text-purple-900">Capacitaciones</h3>
                        <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                        <a href="#" class="block font-medium text-purple-600">Know more</a>
                      </div>
                      <img src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg" class="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600"/>
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

export default PortafolioPage