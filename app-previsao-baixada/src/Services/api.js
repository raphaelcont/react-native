
import axios from 'axios';

//https://api.openweathermap.org/data/2.5/weather?q=santos&units=metric&appid=eda9b146fa26b4041baffaa3a3bcdfa0&lang=pt_br/json/
//https://api.openweathermap.org/data/2.5/weather?q=santos&units=metric&appid=eda9b146fa26b4041baffaa3a3bcdfa0&lang=pt_br/json/

//senha eda9b146fa26b4041baffaa3a3bcdfa0

export const apiKey = 'eda9b146fa26b4041baffaa3a3bcdfa0';

const api = axios.create({
  baseURL:  'https://api.openweathermap.org/weather',
});


export default api;

// api.js
/*
import axios from 'axios';

const apiKey = 'eda9b146fa26b4041baffaa3a3bcdfa0'; // Replace with your actual API key

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/'
});

export const getWeatherByCity = async (city) => {
  try {
    const response = await api.get(`/weather?q=santos&units=metric&appid=eda9b146fa26b4041baffaa3a3bcdfa0&lang=pt_br`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export default api;
*/