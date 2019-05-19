#Install and configure leaflet
B1:
```
yarn add leaflet
```

B2:
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
