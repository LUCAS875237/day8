const schools =
[
    {city: "Bordeaux", lat: 44.8378, lng: -0.5792},
    {city: "Paris", lat: 48.8566, lng: 2.3522},
    {city: "Lyon", lat: 45.7640, lng: 4.8357},
    {city: "Toulouse", lat: 43.6047, lng: 1.4442},
    {city: "Nantes", lat: 47.2184, lng: -1.5536},
];
  
document.addEventListener("DOMContentLoaded", function(){
    var map = L.map("map").setView([46.603354, 1.888334], 6);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
        attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
    })
    .addTo(map);

    var Epitech = L.icon({
      iconUrl: "https://www.pngkit.com/png/detail/459-4596239_epitech-epitech-logo-transparent.png",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    schools.forEach(function(school){
        var marker = L.marker([school.lat, school.lng], {icon: Epitech}).addTo(map);
        marker.bindPopup(school.city + " rocks!");
    });
});  