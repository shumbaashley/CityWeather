import axios from 'axios'


const ipUrl = 'http://api.ipstack.com/check?access_key=ec5d8978eca8789988fa0966bc1a23cd'

export const getLocationFromIP = async () => {
    const {data} = await axios.get(ipUrl);
    return data;
}

export const getCityWeatherData = async (city) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1c170ed572096092d301640dcdf63c3f`) 
    return data
}