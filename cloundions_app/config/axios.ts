import Axios from 'axios';
import { Weather } from '../classes/Weather';

const Api = Axios.create({
    baseURL: "https://api.hgbrasil.com/weather",
    params: {
        key: "3967ccf4"
    }
});

const GetWeather = async (forecastLimit: number, loc: any): Promise<Weather> => {
    let lat: string, lon: string, city: string = "";

    if (loc) {
        if (typeof loc == "object") { // Se receber um objeto ou array. Se for objeto, recebe o primeiro no ternario, se for array, o segundo;
            loc.lat ? lat = loc.lat : lat = loc[0];
            loc.lon ? lon = loc.lon : lon = loc[1];
        } else if (typeof loc == "string") { // Se receber o nome da cidade (se for uma string)
            city = loc;
        }
    }

    var response = await Api.get('', {
        params: {
            lat: lat,
            lon: lon,
            city_name: city,
            array_limit: forecastLimit,
            fields: "temp, description, city_name, condition_slug, forecast,max,min,date,weekday,condition"
        }
    })
    return response.data.results as Weather;

}

export { Api, GetWeather };