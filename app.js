/* test case:
Domain Name: www.example.com
IP Address: 8.8.8.8
*/

const API_KEY = 'at_aA4TKIBgJWhnJ1aRSOjm88sb7q0lR';
const IP_API_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;

/*===============DOM ELEMENTS==============*/
const userInput = document.querySelector('input[type="text"]');
const form = document.querySelector('.form');

/*===============MAP SETTING==============*/
// initilize map
const myMap = L.map('map', { zoomControl: false });

// cutomize map marker icon
const locationIcon = L.icon({
  iconUrl: './images/icon-location.svg',
  iconSize: [35, 45],
});

// add marker with customized icon to the map
const marker = L.marker([0, 0], { icon: locationIcon }).addTo(myMap);

// add a customized Zoom control
myMap.addControl(L.control.zoom({ position: 'bottomright' }));

/*===============FUNCTIONS==============*/
const updateUI = (info) => {
  form.classList.remove('invalid');
  const { ip, isp, location } = info;
  const html = `
        <div class="info__box">
          <h6>IP Address</h6>
          <p>${ip}</p>
        </div>
        <div class="info__box">
          <h6>Location</h6>
          <p>${location.country}, ${location.city}</p>
        </div>
        <div class="info__box">
          <h6>Timezone</h6>
          <p>UTC${location.timezone}</p>
        </div>
        <div class="info__box">
          <h6>ISP</h6>
          <p>${isp}</p>
        </div>`;

  document.querySelector('.info').innerHTML = html;
};

const displayMap = (lat, lng) => {
  //change the view based on given lat&lng
  myMap.setView([lat, lng], 13);

  // add a tile layer to the map
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(myMap);

  //rest the location of the marker, and bind with popup message
  marker
    .setLatLng([lat, lng])
    .bindPopup('<h2 class="popup">ALOHA~ Here is your location📍</h2>')
    .openPopup();
};

const isDomain = (str) => {
  if (!str) return false;
  const regex =
    /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;
  return regex.test(str);
};

const searchIP = (parameter) => {
  fetch(`${IP_API_URL}&${parameter}`)
    .then((res) => res.json())
    .then((data) => {
      if (!data.location) throw new Error(data.messages);
      const lat = data.location.lat;
      const lng = data.location.lng;
      updateUI(data);
      displayMap(lat, lng);
    })
    .catch((err) => {
      form.classList.add('invalid');
      form.insertAdjacentHTML('afterend', `<p class="error-msg">${err} 🥲</p>`);

      setTimeout(() => {
        form.classList.remove('invalid');
        document.querySelector('.error-msg').remove();
      }, 2000);
    });
};

/*===============EVENT HANDLErS==============*/
const handleSearch = (e) => {
  e.preventDefault();

  const searchTerm = userInput.value;

  //check user input is domain or IP
  const parameter = isDomain(searchTerm)
    ? `domain=${searchTerm}`
    : searchTerm
    ? `ipAddress=${searchTerm}`
    : null;

  searchIP(parameter);

  e.currentTarget.reset();
};

const handleLoad = () => {
  searchIP();
};

/*===============EVENT LISTENERS==============*/
window.addEventListener('load', handleLoad);
form.addEventListener('submit', handleSearch);
