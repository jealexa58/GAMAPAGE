import React from 'react'



const QuienesSomos = () => {
  return (
    <div id='sobreNosotros' className=' max-w-[1040px] m-auto py-10'>
      <h1 className='text-4xl font-bold text-center  dark:text-neutral-500'>Sobre Nosotros</h1>
      <br />
      <div
      className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-50  md:flex-row">
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
        alt="" />
      <div className="flex flex-col justify-start p-6">
        <h5
          className="mb-2 text-xl font-medium text-gray-500">
          Card title
        </h5>
        <p className="mb-4 text-base dark:text-neutral-400">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        
      </div>
    </div>
    </div>
  )
}

export default QuienesSomos