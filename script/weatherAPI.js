export async function getWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;


    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("날씨 API 서버 응답에 실패했습니다.");
        }
        
        const data = await response.json();

        return {
            temperature : data.current.temperature_2m,
            humidity : data.current.relative_humidity_2m
        };
    } catch (error) {
            console.error("Error fetching weather data:", error);
            return null;
    }  
}