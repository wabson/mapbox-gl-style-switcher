# Mapbox-GL Style Switcher

This project defines a custom Mapbox GL JS control, which allows
switching between map styles on the fly.

[View demo page](https://wabson.github.io/mapbox-gl-style-switcher/)

## Usage

Include the library in your project

    npm install @wabson/mapbox-gl-style-switcher

Using `<script>` tags

    <script src="node_modules/mapbox-gl-gl-style-switcher/dist/index.js" type="application/javascript"></script>

Or ES6 import

    import StyleSwitcherControl from mapbox-gl-gl-style-switcher

Then create a new instance of the control and add it to the map,
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

You can optionally specify the list of styles displayed by the control via
the `styles` property, e.g. to use Outdoors rather than Streets

```
map.addControl(new StyleSwitcherControl({
    styles: [
        {
            uri: 'mapbox://styles/mapbox/outdoors-v11',
            title: 'Map',
            className: 'style-streets'
        },
        {
            uri: 'mapbox://styles/mapbox/satellite-v9',
            title: 'Satellite',
            className: 'style-satellite'
        }
    ]
});
```