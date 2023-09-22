# Outage Mapping Application

## Overview

This application is built with React and uses the Leaflet mapping library to visualize power outages within a map. Users can navigate the map to different locations and report new outage areas. The outage areas are represented as circles on the map.

## Installation

- Clone the repository.
- Run `npm install` to install all the required dependencies.
- Run `npm start` to start the application.

## File Structure

- App.js: Main application file.
- Form.js: Contains the form for flying to a particular location on the map.
- PostOutage.js: Contains the form for adding new outage areas.

## App Component

### Imports

- React: JavaScript library for building user interfaces.
- Leaflet: Open-source JavaScript library for interactive maps.
- Custom Components: Form and PostOutage.

### Variables

- `circleCenter`: Default center for an initial circle (if needed).
- `circleOptions`: Default styling for the circle.
- `mapRef`: Ref for map container to control map programmatically.
- `areas`: State variable for storing information about all the outage areas.

### Methods

- `fly(e)`
  Takes an event object e as an argument and flies to the location provided in the form. The location is set as the center of the map view.

- `addOutageArea(e)`
  Takes an event object e as an argument and adds a new outage area to the areas state variable. The new outage area is represented as a circle on the map.

### JSX Elements

- `<MapContainer>`
  The main map container that holds the Leaflet map.

- `<TileLayer>`
  Provides the map tiles from OpenStreetMap.

- `<Circle>`
  Represents each outage area. Each `<Circle>` component has a `<Popup>` to display the description.

- `<Form>`
  Custom component that provides a form to fly to different locations on the map.

- `<PostOutage>`
  Custom component that provides a form to add new outage areas.
