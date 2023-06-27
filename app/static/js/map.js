document.addEventListener("DOMContentLoaded", function() {
  // Código para inicializar el mapa y personalizarlo
  var map = L.map("map").setView([-9.189967, -75.015152], 5);
  
  // Capa de teselas del mapa base de OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  
  // Código para agregar el marcador a Tumbes
  var tumbes = L.marker([-3.824139, -80.568830]).addTo(map);
  tumbes.bindPopup("Tumbes").openPopup();
  
  // Código para hacer zoom al hacer clic en el marcador de Tumbes
  tumbes.on("click", function() {
      map.setView(tumbes.getLatLng(), 10);
  });
});
