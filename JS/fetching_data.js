const key = '31f74a9f9d70044a78adda461e9cdf95';

const getCity = async (city_name) => {

    const base_URL = 'http://api.openweathermap.org/data/2.5/weather';
    const query_URL = `?q=${city_name}&units=metric&appid=${key}`

    const response = await fetch(base_URL + query_URL);
    const data = await response.json();

    return data;
};
