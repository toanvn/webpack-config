import GMap  from 'google-maps';
import MapStyle from '../less/index.less'

GMap.KEY = 'AIzaSyDXUMCX-pZb6F4YHsL4gu34SUZ4say46B8';
GMap.LIBRARIES = ['geometry', 'places'];
GMap.load(function(google) {
      initMap();
});

var poly;
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('gmapWrapper'), {
    zoom: 7,
    center: {lat: 41.879, lng: -87.624}  // Center the map on Chicago, USA.
  });

  poly = new google.maps.Polyline({
    strokeColor: '#000000',
    strokeOpacity: 1.0,
    strokeWeight: 3
  });
  poly.setMap(map);

  // Add a listener for the click event
  map.addListener('click', addLatLng);
}

// Handles click events on a map, and adds a new point to the Polyline.
function addLatLng(event) {
  var path = poly.getPath();

  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear.
  path.push(event.latLng);

  // Add a new marker at the new plotted point on the polyline.
  var marker = new google.maps.Marker({
    position: event.latLng,
    title: '#' + path.getLength(),
    map: map
  });
}
