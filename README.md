# Mapbox-GL Style Switcher

This project defines a custom Mapbox GL JS control, which allows
switching between map styles on the fly.

An example is provided in the `demo` folder.

## Usage

Simply create a new instance of the control and add it to the map,
ensuring the map has fully loaded first.

```
const mapEl = document.createElement('div');
mapEl.setAttribute('id', 'map');
document.body.appendChild(mapEl);

mapboxgl.accessToken = '{your-token}';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-0.315, 51.445],
    zoom: 14
});
map.on('load', function() { map.addControl(new StyleSwitcherControl()); });
```