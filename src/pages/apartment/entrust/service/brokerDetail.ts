import axios from 'axios';

export async function getBrokerDetail(params: object) {
  return axios.get(`/apartment/brokerDetail`, { params });
}
