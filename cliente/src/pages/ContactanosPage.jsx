import React from 'react'


function ContactanosPage() {
  return (
    <div>
      <div>

      </div>

      <section className="relative block h-[30vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1691725013692-29eb3f6bca64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-white/30 bg-cover bg-center" />
      </section>

      <section className="relative bg-blue-gray-50/50 py-48 px-10">
        <div className="container mx-auto">
          <div className="relative -mt-72 flex w-full min-w-0 flex-col break-words rounded-3xl bg-gray-50 shadow-xl shadow-gray-500/5">
            <div className=" px-10 py-16">

              <div className="container mx-auto px-6 md:px-12 xl:px-32 text-center">
                <h2 className="mb-4 text-center text-2xl text-purple-900 font-bold md:text-4xl">Contactanos</h2>
                <p className="py-3 text-gray-600 lg:w-20/12 lg:mx-auto">Bienvenido </p>
              </div>

              <div>
                <section className="text-gray-700 body-font relative">
                  <div className="container px-5 py-15 mx-auto">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                      <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                          <div className="relative">
                            <label htmlFor='name' className="leading-7 text-sm text-gray-600">
                              Name
                            </label>
                            <input
                              autoComplete="off"
                              type="text"
                              id="name"
                              name="name"
                              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                          </div>
                        </div>
                        <div className="p-2 w-1/2">
                          <div className="relative">
                            <label
                              htmlFor='email'
                              className="leading-7 text-sm text-gray-600"
                            >
                              Email
                            </label>
                            <input
                              autoComplete="off"
                              type="email"
                              id="email"
                              name="email"
                              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                          </div>
                        </div>
                        <div className="p-2 w-full">
                          <div className="relative">
                            <label
                              htmlFor='message'
                              className="leading-7 text-sm text-gray-600"
                            >
                              Message
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                          </div>
                        </div>
                        <div className="p-2 w-full">
                          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                          </button>
                        </div>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                          <a href="/registro" className="text-indigo-500 px-10">Registrate</a>
                          <a href="/login" className="text-indigo-500 px-10">Inicia Sesión</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ContactanosPage