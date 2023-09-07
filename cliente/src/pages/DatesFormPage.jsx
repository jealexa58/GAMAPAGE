import {useForm} from 'react-hook-form';
import { useDates } from '../context/dateContex';


function DatesFormPage() {
  const {register, handleSubmit} = useForm();
  const {createDate} = useDates();


  const onSubmit = handleSubmit((data)=>{
    createDate(data);
  });

  return (
    <div>
      <div className="flex justify-center py-50 items-center bg-white">
      <form className="bg-white" onSubmit={onSubmit}>
        <h1 className="text-gray-800 font-bold text-2xl mb-1">CITAS</h1>
        <p className="text-sm font-normal text-gray-600 mb-7">Agentate!</p>

        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          
          <textarea
            className="pl-2 outline-none border-none"
            rows="3"
            placeholder="Descripción"
            {...register("description", { required: true })} ></textarea>
            
        </div>

        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
          
          <input
            className="pl-2 outline-none border-none"
            type="text"
            placeholder="Servicio"
            {...register('service', { required: true })}/>
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
          
          <input
            className="pl-2 outline-none border-none"
            type="date"
            placeholder="Fecha"
            {...register('date', { required: true })} />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
          
          <input
            className="pl-2 outline-none border-none"
            type="text"
            placeholder="Hora"
            {...register('hour', { required: true })} />
        </div>

        <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Guardar</button>
      </form>
    </div>
    </div >

  )
}

export default DatesFormPage