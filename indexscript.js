const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '734e6a7febmsh86d3a35fbe66df8p105e1ejsn3b8c65f966a2',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const weatherDataContainer = document.getElementById('weather-data');

try {
	async function fetchData() {
		const response = await fetch(url, options);
		const data = await response.text();
		weatherDataContainer.textContent = data;
	}

	fetchData();
} catch (error) {
	console.error(error);
}
