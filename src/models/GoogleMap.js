import GMap  from 'google-maps';
import MapStyle from '../less/index.less'

GMap.KEY = 'AIzaSyDXUMCX-pZb6F4YHsL4gu34SUZ4say46B8';
GMap.LIBRARIES = ['geometry', 'places'];

const map_options = {
  zoom: 12,
  center: {lat: 16.073076, lng: 108.224963}
};

const map_contain = document.getElementById('gmapWrapper');

GMap.load(function(google) {
    var map = new google.maps.Map(map_contain, map_options);
});
