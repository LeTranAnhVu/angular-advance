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
