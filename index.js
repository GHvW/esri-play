require([
  "esri/Map",
  "esri/views/MapView"
], function (Map, MapView) {

  const map = new Map({
    basemap: "topo-vector"
  });

  const view = new MapView({ // 2D
    container: "app",
    map: map,
    center: [-96.3365, 30.6185],
    zoom: 11
  });

});