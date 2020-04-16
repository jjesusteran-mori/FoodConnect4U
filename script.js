
// api
// display map section or orange county
function initMap() {
    // The location of Uluru 33.6394877,-118.3298942
    var uluru = {lat: 33.7175, lng: -117.8311};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 11, center: uluru});
    // The marker, positioned at Uluru
    // var marker = new google.maps.Marker({position: uluru, map: map});
    
    foodLocation.forEach(function(puppy){
    var lat = Number(puppy.latLong.split(',')[0]);
    var lng = Number(puppy.latLong.split(',')[1]);
    console.log(lat,lng)
    var marker = new google.maps.Marker({position: {lat:lat, lng:lng}, map: map});
    // infowindow.setContent('Name - ' + puppy.name);
    // infowindow.open(map, this);
    infowindow = new google.maps.InfoWindow()
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent(puppy.name);
      infowindow.open(map, this);
    });
    
    for (i=0; i<foodLocation.length; i++){
      var listDisplay = $("#list")
      function appendLocations(place) {
      listDisplay.append(`<div class="card-body"><h6 class="card-title">${puppy.name}</h6><p class="card-text">${puppy.address}</p></div></div>`)
    }
    appendLocations();
  };
    // function appendLocations(puppy) {
    //   $('#list').prepend(`<div class="card-body"><h6 class="card-title">${puppy.name}</h6><p class="card-text">${puppy.address}</p></div></div>`)
    // }
})
  }

//for loop

//ul list