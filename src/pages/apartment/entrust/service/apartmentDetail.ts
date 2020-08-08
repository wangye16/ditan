import axios from 'axios';

export async function getApartmentDetail(params: object) {
  return axios.get(`/apartment/apartmentDetail`, { params });
}
