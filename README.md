sfpark-demo
===========

A Demo Sencha Application using the SFPark API

This is a basic training designed to quickly introduce developers to the Sencha Touch framework for mobile apps.

Getting Started:
- Download Sencha Cmd and the Sencha Touch SDK
- The project references the sdk at ../touch
- The *services* folder contains a wrapper on the sfpark API that allows JSONP.  You can request this locally or deploy to some other server.

0: Generate App with Sencha Command

cd to the touch sdk folder to begin.

Usage: sencha [--sdk optional sdk location param] generate app [appname] [path]
sencha --sdk ../touch generate app sfpark sfpark

1: Create the model and the Store
model/Location.js
store/Locations.js
add to app.js

2: Create the Main and List Views
view/LocationsList.js
view/Main.js
add LocationsList to app.js

3: Create the map detail view
view/Map.js
Add the google maps library to app.json

4: Create the controller
controller/Main.js
add Main.js to app.js

5: Implement the Search Bar
Update Refs in controller/Main.js
Add the control and function

6: Add a custom theme
update resources/sass/app.scss with new code
add the parking icon to resources/sass/images folder

7: Build the Application
add remote:true parameter to app.json to build with Google Maps API
sencha app build testing

add resources/images/parking.png to the resources section in app.json
sencha app build production
