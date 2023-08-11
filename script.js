// GOOGLE MAPS
let map, bounds;
const API = "c3926d7198msh7f865f753f0716bp1348e9jsn75c8521a48ba";
const init_center = { lat: 35.689487, lng: 139.691711 };

function initMap() {
  map = new google.maps.Map(document.getElementById("mapContainer"), {
    center: init_center,
    zoom: 11,
    disableDefaultUI: true,
  });
  bounds = new google.maps.LatLngBounds();
}
window.initMap = initMap;

const fetchCountry = async () => {
  const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/countries?limit=10&offset=40";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c3926d7198msh7f865f753f0716bp1348e9jsn75c8521a48ba",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
      return result
  } catch (error) {
    console.error(error);
  }
};

const fetchHotels = async () => {
  const url = "https://hotels4.p.rapidapi.com/v2/get-meta-data";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4525616425msh3fb92284d1f0298p124236jsn01e6e586e6b8",
      "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result
  } catch (error) {
    console.error(error);
  }
};
// fetchHotels();
(async function loadingContries() {
  const countries = await fetchCountry();
  const countryList = document.querySelector(".countries_list");
  

  for (let i = 0; i < countries.length; i++) {
    // countryList.innerHTML += `<li>${countries[i]}</li>`;
    console.log(countries[i]);

  }
})();

