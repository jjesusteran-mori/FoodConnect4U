
// api

function initMap() {
    // The location of Uluru 33.6394877,-118.3298942
    var uluru = {lat: 33.7175, lng: -117.8311};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 11, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

