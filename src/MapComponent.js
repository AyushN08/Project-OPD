import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';
import hospitalIcon from './hospital-icon.jpg';


// Path to your custom marker image
const markerIcon = L.icon({
    iconUrl: hospitalIcon, // Update with the path to your image
    iconSize: [32, 32], // Size of the icon (width, height)
    iconAnchor: [16, 32], // Point of the icon which will correspond to the marker's location
    popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
});

const MapComponent = () => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const [hospitalMarkers, setHospitalMarkers] = useState([]);

    useEffect(() => {
        if (mapRef.current && !mapInstance.current) {
            mapInstance.current = L.map(mapRef.current).setView([20.5937, 78.9629], 5);
    
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(mapInstance.current);
    
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const { latitude, longitude } = position.coords;
                    mapInstance.current.setView([latitude, longitude], 13);
                    findNearbyHospitals(latitude, longitude);
                }, error => {
                    console.error('Error getting user location:', error);
                    alert('Error getting your location. Please use the search instead.');
                });
            } else {
                console.error('Geolocation is not supported by this browser.');
                alert('Geolocation is not supported by this browser. Please use the search instead.');
            }
        }
    
        return () => {
            // Cleanup on component unmount
            clearHospitalMarkers(); // Ensure all markers are removed
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, []);
        

    const findNearbyHospitals = (lat, lon) => {
        const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:5000,${lat},${lon})[amenity=hospital];out;`;
    
        axios.get(overpassUrl)
            .then(response => {
                // Clear previous markers before adding new ones
                clearHospitalMarkers();
    
                const newMarkers = response.data.elements.map(hospital => {
                    const marker = L.marker([hospital.lat, hospital.lon], { icon: markerIcon })
                        .bindPopup(`<p>Hospital: ${hospital.tags.name || 'Unknown'}</p>`);
                    marker.addTo(mapInstance.current);
                    return marker;
                });
    
                setHospitalMarkers(newMarkers);
            })
            .catch(error => {
                console.error('Error fetching hospitals:', error);
                alert('Error fetching nearby hospitals. Please try again.');
            });
    };

    const clearHospitalMarkers = () => {
        // Remove each marker from the map
        hospitalMarkers.forEach(marker => mapInstance.current.removeLayer(marker));
        // Clear the state array of markers
        setHospitalMarkers([]);
    };
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const location = event.target.location.value;
        if (location) {
            axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`)
                .then(response => {
                    if (response.data.length > 0) {
                        const { lat, lon } = response.data[0];
                        mapInstance.current.setView([lat, lon], 13);
                        findNearbyHospitals(lat, lon);
                    } else {
                        alert('Location not found. Please try another location.');
                    }
                })
                .catch(error => {
                    console.error('Error fetching location data:', error);
                    alert('Error fetching location data. Please try again.');
                });
        }
    };

    return (
        <div>
            <div id="map" ref={mapRef} style={{ height: '100vh' }}></div>
            <div id="sidebar">
                <form onSubmit={handleSearchSubmit}>
                    <input type="text" name="location" placeholder="Enter location" />
                    <button type="submit">Search</button>
                </form>
                <button onClick={() => {
                    const center = mapInstance.current.getCenter();
                    findNearbyHospitals(center.lat, center.lng);
                }}>Find Nearby Hospitals</button>
                <button onClick={() => clearHospitalMarkers()}>
                    Clear Hospital Markers
                </button>
            </div>
        </div>
    );
};

export default MapComponent;
