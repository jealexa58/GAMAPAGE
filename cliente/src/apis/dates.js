import axios from './axios';

//busca las citas
export const getDatesRequest = () => axios.get('/dates');
//busca una sola cita
export const getDateRequest = (id) => axios.get(`/dates/${id}`);
//Crea una cita
export const createDateRequest = (date) => axios.post('/dates', date);
//Actualiza  una cita
export const updateDateRequest = (date) => axios.put(`/dates/${date._id}`, date);
//Elimina una cita
export const deleteDateRequest = (id) => axios.get(`/dates/${id}`);



