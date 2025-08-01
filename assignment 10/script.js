async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "312b9494e17843f29cf154319253107"; // Use your own key
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      document.getElementById("result").innerHTML = `❌ ${data.error.message}`;
      return;
    }

    // ✅ Now safe to access current weather
    const temp = data.current.temp_c;
    const condition = data.current.condition.text;
    const icon = data.current.condition.icon;

    document.getElementById("result").innerHTML = `
      <h3>${data.location.name}, ${data.location.country}</h3>
      <p>🌡️ Temperature: ${temp}°C</p>
      <p>⛅ Condition: ${condition}</p>
      <img src="https:${icon}" alt="icon">
    `;

  } catch (error) {
    document.getElementById("result").innerHTML = "⚠️ Error fetching data.";
    console.log(error); // for debugging
  }
}
