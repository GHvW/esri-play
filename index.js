// look into these for vue:
// https://github.com/oppoudel/CreateMap
// https://github.com/tomwayson/esri-vue-cli-example
// https://github.com/odoe/vue-jsapi4


// for Feature Layer practice https://developers.arcgis.com/javascript/latest/guide/add-layers-to-a-map/
// feature layer for client side graphics https://developers.arcgis.com/javascript/latest/sample-code/layers-featurelayer-collection/index.html
// query feature layer
// apply edits to feature layer
// use featureform layer to allow users to apply edits https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html

// graphics layer https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html 

// instead of graphics layer for updates, should we just cache the featureforms / graphics / geometries or whatever for any given session


require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/VectorTileLayer",
  "esri/Basemap",
], function (Map, MapView, Basemap, VectorTileLayer) {

  // const awesomeBasemap = new Basemap({
  //   baselayers: [
  //     new VectorTileLayer({ // https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-VectorTileLayer.html
  //       style: styling // pulls in from vTileLayer via import order in index.html til modules are figured out
  //     })
  //   ]
  // });

  const map = new Map({
    basemap: "streets-navigation-vector"
  });

  const view = new MapView({ // 2D
    container: "app",
    map: map,
    center: [-96.3365, 30.6185],
    zoom: 11
  });

});