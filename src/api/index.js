import axios from 'axios'


const ipUrl = 'http://api.ipstack.com/check?access_key=ec5d8978eca8789988fa0966bc1a23cd'

export const getLocationFromIP = async () => {
    try {
        const {data} = await axios.get(ipUrl);
        return data;
    } catch (error) {
        console.log(error.message)                
    }
}

export const getCityWeatherData = async (city) => {
    try {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1c170ed572096092d301640dcdf63c3f`) 
        return data
    } catch (error) {
        console.log(error.message)        
    }
}

export const sendContactForm = async (formData) => {
    try {
        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }
        const {data} = await axios.post('http://localhost:5000/send', formData, config)
        return data.message
    } catch (error) {
        console.log(error.message)
    }
}