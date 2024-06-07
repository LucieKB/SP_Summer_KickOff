import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./MapComponent.css";

const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

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

      //Add markers
      //Lin's
      new mapboxgl.Marker({
        color: "red",
        anchor: "center",
      })
        .setLngLat([-111.61242, 40.74559])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            "<h4>" + "Base Camp" + "</h4><p>" + "Start and finish !"
          )
        )
        .addTo(map);

      //Trivia
      new mapboxgl.Marker({
        color: "purple",
        anchor: "center",
      })
        .setLngLat([-111.608739, 40.744834])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            "<h4>" +
              "Trivia" +
              "</h4><img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Mario_and_Sonic_at_the_Olympic_Games_box_art.png/220px-Mario_and_Sonic_at_the_Olympic_Games_box_art.png' width='100px'>"
          )
        )
        .addTo(map);

      //Bridhouse and Garlic Mustard
      new mapboxgl.Marker({
        color: "green",
        anchor: "center",
      })
        .setLngLat([-111.613416, 40.744926])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            "<h4>" +
              "🐦‍⬛🐦‍🪺🌿💪" +
              "</h4><p>" +
              "Bird Houses and Garlic Mustard Pulling " +
              "</p>"
          )
        )
        .addTo(map);

      //Cornhole bags to place countries / Flags
      new mapboxgl.Marker({
        color: "lightblue",
        anchor: "center",
      })
        .setLngLat([-111.623812, 40.750101])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            "<h4>" +
              "🌎Geographs Needed🌎" +
              "</h4><p>" +
              "🇧🇷🇨🇦🇨🇿🇫🇷🇮🇸🇮🇹🇺🇸" +
              "</p>"
          )
        )
        .addTo(map);

      // Lemonade + connections
      new mapboxgl.Marker({
        color: "yellow",
        anchor: "center",
      })
        .setLngLat([-111.619055, 40.74707])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            "<h4>" +
              "🍋🥤 + 🧐" +
              "</h4><p>" +
              "Drink a lemonade while playing Connections !" +
              "</p>"
          )
        )
        .addTo(map);

      // Hidden envelopes 1
      new mapboxgl.Marker({
        color: "black",
        anchor: "center",
      })
        .setLngLat([-111.616939, 40.746814])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            "<h4>Hidden Envelopes 1</h4>"
          )
        )
        .addTo(map);

      // Hidden envelopes 2
      new mapboxgl.Marker({
        color: "black",
        anchor: "center",
      })
        .setLngLat([-111.608951, 40.746348])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            "<h4>Hidden Envelopes 2</h4>"
          )
        )
        .addTo(map);

      // Clean up on unmount
      return () => map.remove();
    }
  }, []);

  return (
    <div ref={mapContainer} style={{ width: "700px", minHeight: "500px" }} />
  );
};

export default MapComponent;

// mapbox://styles/mapbox/standard
