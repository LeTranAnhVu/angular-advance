#Install and configure leaflet
####B1:
```
yarn add leaflet
```

####B2:
> Configure in angular.json 
> public the js, css as well as images to leaflet 
```
"assets": [
              ...,
              { "glob": "**/*", "input": "./node_modules/leaflet/dist/images", "output": "/" }
            ],
            "styles": [
              ...,
              "node_modules/leaflet/dist/leaflet.css"
            ],
            "scripts": [
              "node_modules/leaflet/dist/leaflet.js"
            ],
```

###Note:
> Marker image should be explicit point out when using. If not it not show up when deploy to production
```
    markerConf = {
      icon: L.icon({
        iconUrl: '/marker-icon.png',
        shadowUrl: '/marker-shadow.png'
      })
    };
```
>Then
```
    L.marker([51.505, -0.09], markerConf).addTo(map)
```

#Install and configure location search feature in esri-leaflet 
####B1:
```
    yarn add esri-leaflet-geocoder
```
>note: you must install leaflet before 
> if does not :
```
    yarn add leaflet
```

####B2:
> Configure in angular.json 
> public the js, css as well as images to leaflet 
```
 "assets": [
    ...,
    { "glob": "**/*", "input": "./node_modules/leaflet/dist/images", "output": "/" },
    { "glob": "**/*", "input": "./node_modules/esri-leaflet-geocoder/dist/img", "output": "/" }
  ],
  "styles": [
    ...,
    "node_modules/leaflet/dist/leaflet.css",
    "node_modules/esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css"
  ],
  "scripts": [
    ...,
    "node_modules/leaflet/dist/leaflet.js",
    "node_modules/esri-leaflet/dist/esri-leaflet.js",
    "node_modules/esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js"
  ],
```

####B3 Usage:
> in component,  define the searchControll:
```
   const searchControl = L.esri.Geocoding.geosearch().addTo(this.map);
      searchControl.on('results', (data) => {
        results.clearLayers();
        for (let i = data.results.length - 1; i >= 0; i--) {
          results.addLayer(L.marker(data.results[i].latlng));
        }
      });
      const results = new L.LayerGroup().addTo(this.map);
```
