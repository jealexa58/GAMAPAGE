import { useEffect } from 'react';
import { useDates } from '../context/dateContex';
import DateCard from '../components/DateCard';

function DatesPage() {

  const { getDates, dates } = useDates();

  useEffect(() => {
    getDates();
  }, [])

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
                    <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Citas</h2>
                  </div>

                  <div className='container mx-auto px-10 grid grid-cols-3 gap-2'>
                    {dates.map((date) => (
                      <DateCard date={date} key={date._id} />
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div>

  );
}

export default DatesPage