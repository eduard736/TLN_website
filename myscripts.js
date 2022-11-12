// Initialize and add the map
function initMap() {
    // The location of Uluru45.65634431752302, 25.59872733562484
    const uluru = { lat: 45.65634431752302, lng: 25.59872733562484 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;