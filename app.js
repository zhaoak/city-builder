/* Imports */

/* Get DOM Elements */
const welcomeBanner = document.getElementById('welcome-banner');
const geographyImg = document.getElementById('geography-img');
const architectureImg = document.getElementById('architecture-img');
const weatherImg = document.getElementById('weather-img');
const sloganLocation = document.getElementById('slogan-location');
const geographySelect = document.getElementById('geography-select');
const geographyCounterDisplay = document.getElementById('geography-changes');
const architectureSelect = document.getElementById('architecture-select');
const architectureCounterDisplay = document.getElementById('architecture-changes');
const weatherSelect = document.getElementById('weather-select');
const weatherCounterDisplay = document.getElementById('weather-changes');
const cityTextbox = document.getElementById('city-textbox');
const cityButton = document.getElementById('city-button');
const sloganTextbox = document.getElementById('slogan-textbox');
const sloganButton = document.getElementById('slogan-button');

/* State */
let geographyChangeCounter = 0;
let architectureChangeCounter = 0;
let weatherChangeCounter = 0;
let cityName = 'CITY NAME HERE';
let citySlogans = [];

/* Events */
geographySelect.addEventListener('change', (e) => {
    if (e.target.value === 'placeholder') {
        geographyImg.src = './assets/placeholderImg.png';
    } else {
        geographyChangeCounter++;
        const geographyValue = e.target.value;
        geographyImg.src = `./assets/${geographyValue}-geography.jpeg`;
        displayStats();
    }
});

architectureSelect.addEventListener('change', (e) => {
    architectureChangeCounter++;
    const architectureValue = e.target.value;
    architectureImg.src = `./assets/${architectureValue}-architecture.jpeg`;
    displayStats();
});

weatherSelect.addEventListener('change', (e) => {
    weatherChangeCounter++;
    const weatherValue = e.target.value;
    weatherImg.src = `./assets/${weatherValue}-climate.jpeg`;
    displayStats();
});

cityButton.addEventListener('click', (e) => {
    welcomeBanner.textContent = ` Welcome to the City Of ${cityTextbox.value}!`;
    cityTextbox.value = '';
});

sloganButton.addEventListener('click', (e) => {
    citySlogans.push(sloganTextbox.value);
    sloganTextbox.value = '';
    displaySlogans();
});

/* Display Functions */
function displayStats() {
    geographyCounterDisplay.textContent = geographyChangeCounter;
    architectureCounterDisplay.textContent = architectureChangeCounter;
    weatherCounterDisplay.textContent = weatherChangeCounter;
}
function displaySlogans() {
    sloganLocation.textContent = '';
    for (let slogan of citySlogans) {
        const sloganDisplay = document.createElement('p');
        sloganDisplay.textContent = slogan;
        sloganLocation.append(sloganDisplay);
    }
}
// (don't forget to call any display functions you want to run on page load!)
