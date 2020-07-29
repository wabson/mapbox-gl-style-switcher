import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import StyleSwitcherControl from '../src/index';

import './style.css';

const mapEl = document.createElement('div');
mapEl.setAttribute('id', 'map');
document.body.appendChild(mapEl);

mapboxgl.accessToken = 'pk.eyJ1Ijoid2Fic29uIiwiYSI6ImNrNzBmbzkzbDA4ZWMzbG16M3gxMGF5dnoifQ.x_rIQz0D0enm_E5IIRhJPQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-0.315, 51.445],
    zoom: 14
});
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'top-left');

map.on('load', function() { map.addControl(new StyleSwitcherControl()); });