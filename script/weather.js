const citySelect = document.querySelector('#city-select');
const weatherBox = document.querySelector('#weather-box');

citySelect.addEventListener('change', async function(event) {
    const selectedValue = event.target.value;
    if (selectedValue === "none") {
        weatherBox.innerHTML = "<p>도시를 선택하세요.</p>";
        return;
    }
    
    const coords = selectedValue.split(',');
    const lat = coords[0];
    const lon = coords[1];
    const cityName = citySelect.options[citySelect.selectedIndex].text;

    weatherBox.innerHTML = "<p>⏳ 날씨 정보를 불러오는 중...</p>";

    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("날씨 API 서버 응답에 실패했습니다.");
        }
        
        const data = await response.json();

        const temperature = data.current.temperature_2m;
        const humidity = data.current.relative_humidity_2m;

        weatherBox.innerHTML = `
            <h4>📍 ${cityName} 날씨</h4>
            <p>🌡️ 현재 온도: <b>${temperature}°C</b></p>
            <p>💧 현재 습도: <b>${humidity}%</b></p>
        `;
    } catch (error) {
        weatherBox.innerHTML = "<p>❌ 날씨 정보를 불러오는 중 오류가 발생했습니다.</p>";
        console.error("Error fetching weather data:", error);
    }
});