const OPEN_WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
const OPEN_WEATHER_API_KEY = 'MY API KEY';

const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
const GEO_API_OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4f0dcce84bmshac9e329bd55fd14p17ec6fjsnff18c2e61917',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    }
}

export async function getWeatherData(latitude, longitude) {
    try {
        let [weatherPromise, forcastPromise] = await Promise.all([
            fetch(`${OPEN_WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`),
            fetch(`${OPEN_WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`),
        ]);

        const weatherResponse = await weatherPromise.json(); // build-in fetch require response.json()
        const forcastResponse = await forcastPromise.json();
        return [weatherResponse, forcastResponse];
    } catch (error) {
        console.log(error);
        return;
    }
}

export async function getCityList(input) {
    try {
        const response = await fetch(
            `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
            GEO_API_OPTIONS
        );

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return;
    }
}