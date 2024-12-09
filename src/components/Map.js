import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Container from './Container';
import './css/Map.css'

const containerStyle = {
  width: '100%',
  height: '400px'
};

const location = {
  lat: 57.908637,
  lng: 59.983534
};

export default function Map() {
  return (
    <Container>
      <div className="map">
        <LoadScript googleMapsApiKey="AIzaSyCwfniKPDGdwTqQcdAGd-Q7Dq24-v6Lq5U">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location}
            zoom={15}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      </div>
    </Container>
  );
};
