// 요소 찾기
const citySelect = document.querySelector('#citySelect');
const weatherBox = document.querySelector('#weatherBox');

citySelect.addEventListener('change', async function(event) {
    const selectedValue = event.target.value;
    if (selectedValue === "none") {
        weatherBox.innerHTML = "<p>도시를 선택하세요.</p>";
        return;
    }
    
    // 위도, 경도 좌표 분리
    const [lat, lon] = selectedValue.split(',');
    const cityName = citySelect.options[citySelect.selectedIndex].text;

    weatherBox.innerHTML = "<p>날씨 정보를 불러오는 중...</p>";

    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;
            const response = await fetch(url);
            const data = await response.json();

            const temperature = data.current.temperature_2m;
            const humidity = data.current.relative_humidity_2m;

            //dom에 정보 주입
            weatherBox.innerHTML = `
                <h3>${cityName}의 현재 날씨</h3>
                <p>현재 온도: ${temperature}°C</p>
                <p>현재 습도: ${humidity}%</p>
            `;
    } catch (error) {
        weatherBox.innerHTML = "<p>날씨 정보를 불러오는 중 오류가 발생했습니다.</p>";
        console.error("Error fetching weather data:", error);
    }
});