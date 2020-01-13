import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://burger-3ddd5.firebaseio.com/'
});


export default axiosOrders;