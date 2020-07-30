import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import StyleSwitcherControl from '../src/index';

import './style.css';

const mapEl = document.createElement('div');
mapEl.setAttribute('id', 'map');
document.body.appendChild(mapEl);

mapboxgl.accessToken = 'pk.eyJ1Ijoid2Fic29uIiwiYSI6ImNrZDhvNmZoejJkajEydG50eW92MHl2YzgifQ.SWUYXky-aC29D505Ku0oUQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [-0.315, 51.445],
    zoom: 14
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'top-left');

map.on('load', function() { map.addControl(new StyleSwitcherControl()); });