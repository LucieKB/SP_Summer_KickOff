import React, { useEffect, useRef } from "react";
import mapboxgl, { GeoJSONSourceRaw } from "mapbox-gl";
import "./MapComponent.css";

const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  //   const geojson = {
  //     type: "FeatureCollection",
  //     features: [
  //       {
  //         type: "Feature",
  //         geometry: {
  //           type: "Point",
  //           coordinates: [-111.618639, 40.744528],
  //         },

  //         properties: {
  //           title: "Mapbox",
  //           description: "Push-Ups !",
  //         },
  //       },
  //     ],
  //   };

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibHVjaWVrYiIsImEiOiJjbHd0cjB1ejQwNzRyMmpvZ2kzZ2duNHY5In0.iqchI2asalN3X17e8ha_Aw";

    console.log(mapboxgl);
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/outdoors-v12",
        center: [-111.6124267578125, 40.74550247192383],
        zoom: 14,
        maxZoom: 20,
      });

      // Add zoom controls
      map.addControl(new mapboxgl.NavigationControl(), "top-left");

      // Add your custom markers and lines here
      //   // add markers to map
      //   geojson.features.forEach(function (marker) {
      //     const [longitude, latitude] = marker.geometry.coordinates;
      //     // create a HTML element for each feature
      //     var el = document.createElement("div");
      //     el.className = "marker";

      //     // make a marker for each feature and add it to the map
      //     new mapboxgl.Marker(el)
      //       .setLngLat([longitude, latitude])
      //       .setPopup(
      //         new mapboxgl.Popup({ offset: 25 }) // add popups
      //           .setHTML(
      //             "<h3>" +
      //               marker.properties.title +
      //               "</h3><p>" +
      //               marker.properties.description +
      //               "</p>"
      //           )
      //       )
      //       .addTo(map);
      //   });

      new mapboxgl.Marker({
        color: "red",
        anchor: "center",
      })
        .setLngLat([-111.618639, 40.7])
        .addTo(map);

      // Clean up on unmount
      return () => map.remove();
    }
  }, []);

  return (
    <div ref={mapContainer} style={{ width: "700px", minHeight: "700px" }} />
  );
};

export default MapComponent;

// mapbox://styles/mapbox/standard
