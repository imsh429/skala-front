import { getWeather } from './weatherAPI.js';

const citySelect = document.querySelector('#city-select');
const weatherBox = document.querySelector('#weather-box');

citySelect.addEventListener('change', async function(event) {
    console.log("선택된 옵션의 값:", event.target.value);
    const selectedValue = event.target.value;
    if (selectedValue === "none") {
        weatherBox.innerHTML = "<p>도시를 선택하세요.</p>";
        return;
    }
    
    const coords = selectedValue.split(',');
    const cityName = citySelect.options[citySelect.selectedIndex].text;

    weatherBox.innerHTML = "<p>⏳ 날씨 정보를 불러오는 중...</p>";

    const weatherInfo = await getWeather(coords[0], coords[1]);

    if(weatherInfo) {
        const { temperature, humidity } = weatherInfo;

        weatherBox.innerHTML = `
            <h4>📍 ${cityName} 날씨</h4>
            <p>🌡️ 현재 온도: <b>${temperature}°C</b></p>
            <p>💧 현재 습도: <b>${humidity}%</b></p>
        `;
    } else {
        weatherBox.innerHTML = "<p>❌ 날씨 정보를 불러오는 중 오류가 발생했습니다.</p>";
        console.error("Error: 날씨 데이터를 가져오는 데 실패했습니다.");
    }
});