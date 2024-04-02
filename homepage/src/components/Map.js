import React, { useState, useEffect } from 'react';
import { GoogleMap, Autocomplete, useLoadScript } from "@react-google-maps/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconBase = "http://maps.google.com/mapfiles/ms/icons/";
const icons = {
    yoga: {
        name: "Yoga",
        icon: iconBase + "green-dot.png",
    },
    meditation: {
        name: "Meditation",
        icon: iconBase + "blue-dot.png",
    },
    acupuncture: {
        name: "Acupuncture",
        icon: iconBase + "yellow-dot.png",
    },
    guidedImagery: {
        name: "Guided Imagery",
        icon: iconBase + "orange-dot.png",
    },
    massageTherapy: {
        name: "Massage Therapy",
        icon: iconBase + "pink-dot.png",
    },
};
let marker

let yogaService;
let yogaPlaceRequest;
const YOGA = "therapeutic yoga";

let meditationService;
let meditationPlaceRequest;
const MEDITATION = "meditation";

let acupunctureService;
let acupuncturePlaceRequest;
const ACUPUNCTURE = "acupuncture";

let guidedImageryService;
let guidedImageryPlaceRequest;
const GUIDEDIMAGERY = "guided imagery";

let massageTherapyService;
let massageTherapyPlaceRequest;
const MASSAGETHERAPY = "massage therapy";

let detailsService;
let directionsService;
let directionsRenderer;
let infowindow;
let startingLocation;

let initialStartingMode = "DRIVING";

const MapComponent1 = () => {
    const [map, setMap] = useState(null);

    const [autocomplete, setAutocomplete] = useState(null);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyBmceqKUN6knUJRQHGvG5xf08rAiiLXMeI",
        libraries: ['places'],
    });

    const handleMapLoad = (map) => {
        setMap(map);
    };

    const handleAutocompleteLoad = (autocomplete) => {
        setAutocomplete(autocomplete);
    };

    const onPlaceChanged = () => {
        startingLocation = autocomplete.getPlace();

        if (!startingLocation.geometry) {
            // Handle the case when no valid place is selected
            console.log("Please select a valid place.");
        } else {
            // Logic to handle when a valid place is selected
            map.setCenter(startingLocation.geometry.location);
            marker = new window.google.maps.Marker({
                map
            })
            marker.setPosition(startingLocation.geometry.location);
            marker.setMap(map);

            // Step 3: Search for nearby specific facilities

            // Define a list of place types and their respective callbacks
            const placeTypes = [
                { type: YOGA, callback: yogaSearchCallback },
                { type: MEDITATION, callback: meditationSearchCallback },
                { type: ACUPUNCTURE, callback: acupunctureSearchCallback },
                { type: GUIDEDIMAGERY, callback: guidedImagerySearchCallback },
                { type: MASSAGETHERAPY, callback: massageTherapySearchCallback }
            ];
            // Iterate through each place type and perform a nearby search
            placeTypes.forEach(placeType => {
                const placeRequest = {
                    location: startingLocation.geometry.location,
                    radius: 16093.4,
                    keyword: placeType.type
                };
                const service = new window.google.maps.places.PlacesService(map);
                service.nearbySearch(placeRequest, placeType.callback);
            });
        }
    };

    const yogaSearchCallback = (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var request = {
                    placeId: results[i].place_id,
                    fields: ['name', 'rating', 'reviews', 'website', 'formatted_address', 'formatted_phone_number', 'geometry', 'photos']
                };
                detailsService = new window.google.maps.places.PlacesService(map);
                detailsService.getDetails(request, yogaDetailsCallback);
            }
        } else {
            // alert("No Yoga Facilities Found Nearby");
        }
    }

    const yogaDetailsCallback = (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            createMarker(place, YOGA);
        }
    };

    const meditationSearchCallback = (results, status) => {
        // alert("meditation callback func called")
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var request = {
                    placeId: results[i].place_id,
                    fields: ['name', 'rating', 'reviews', 'website', 'formatted_address', 'formatted_phone_number', 'geometry', 'photos']
                };
                detailsService = new window.google.maps.places.PlacesService(map);
                detailsService.getDetails(request, meditationDetailsCallback)
            }
        }
        else {
            // alert("No Meditation Facilities Found Nearby")
        }
    }
    const meditationDetailsCallback = (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            createMarker(place, MEDITATION);
        }
    }
    const acupunctureSearchCallback = (results, status) => {
        // alert("acupuncture callback func called")
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var request = {
                    placeId: results[i].place_id,
                    fields: ['name', 'rating', 'reviews', 'website', 'formatted_address', 'formatted_phone_number', 'geometry', 'photos']
                };
                detailsService = new window.google.maps.places.PlacesService(map);
                detailsService.getDetails(request, acupunctureDetailsCallback)
            }
        }
        else {
            // alert("No Acupuncture Facilities Found Nearby")
        }
    }
    const acupunctureDetailsCallback = (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            createMarker(place, ACUPUNCTURE);
        }
    }
    const guidedImagerySearchCallback = (results, status) => {
        // alert("guided imagery callback func called")
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var request = {
                    placeId: results[i].place_id,
                    fields: ['name', 'rating', 'reviews', 'website', 'formatted_address', 'formatted_phone_number', 'geometry', 'photos']
                };
                detailsService = new window.google.maps.places.PlacesService(map);
                detailsService.getDetails(request, guidedImageryDetailsCallback)
            }
        }
        else {
            // alert("No Guided Imagery Facilities Found Nearby")
        }
    }

    const guidedImageryDetailsCallback = (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            createMarker(place, GUIDEDIMAGERY);
        }
    }

    const massageTherapySearchCallback = (results, status) => {
        // alert("massage therapy callback func called")
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var request = {
                    placeId: results[i].place_id,
                    fields: ['name', 'rating', 'reviews', 'website', 'formatted_address', 'formatted_phone_number', 'geometry', 'photos']
                };
                detailsService = new window.google.maps.places.PlacesService(map);
                detailsService.getDetails(request, massageTherapyDetailsCallback)
            }
        }
        else {
            // alert("No Massage Therapy Facilities Found Nearby")
        }
    }

    const massageTherapyDetailsCallback = (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            createMarker(place, MASSAGETHERAPY);
        }
    }

    const createMarker = (place, placeType) => {
        if (!place.geometry || !place.geometry.location) return;

        let photoHTML = '';
        if (place.photos && place.photos.length > 0) {
            const photo = place.photos[0]; // Assuming you want to display the first photo
            photoHTML = '<img src="' + photo.getUrl({ maxWidth: 200 }) + '">';
        } else {
            photoHTML = '<p>No photo available</p>';
        }
        // Generate HTML for the name
        const nameHTML = '<h1>' + place.name + '</h1>';

        // Generate HTML for the address, phone number, website, rating, and reviews
        let detailsHTML = '<p><b>Address:</b> ' + place.formatted_address + '</p>' +
            '<p><b>Phone:</b> ' + place.formatted_phone_number + '</p>' +
            '<p><b>Website:</b> <a href="' + place.website + '">' + place.website + '</a></p>' +
            '<p><b>Rating:</b> ' + place.rating + '</p>';

                    // Add reviews if available
        if (place.reviews && place.reviews.length > 0) {
            detailsHTML += '<h2>Reviews:</h2>';
            for (let i = 0; i < Math.min(place.reviews.length, 2); i++) {
            const review = place.reviews[i];
            detailsHTML += '<p><b>Author:</b> ' + review.author_name + '</p>' +
                '<p><b>Rating:</b> ' + review.rating + '</p>' +
                '<p><b>Review:</b> ' + review.text + '</p>';
            }
        } else {
            detailsHTML += '<p>No reviews available</p>';
        }

        // Concatenate all HTML elements
        const contentString =
            '<div id="content">' +
            '<div id="siteNotice"></div>' +
            '<div id="bodyContent">' +
            photoHTML +
            nameHTML +
            detailsHTML +
            '</div>' +
            '</div>';
        if (placeType === YOGA) {

            const marker = new window.google.maps.Marker({
                position: place.geometry.location,
                icon: icons.yoga.icon,
                map
            });

            window.google.maps.event.addListener(marker, "click", () => {

                infowindow = new window.google.maps.InfoWindow();
                infowindow.setContent(contentString);
                infowindow.setPosition(place.geometry.location);
                infowindow.setOptions({
                    maxWidth: 500,
                    
                });
                infowindow.open(map);
                //calcRoute(place.geometry.location);

                /*
                // Add custom CSS styling after the InfoWindow is opened
                window.google.maps.event.addListenerOnce(infowindow, 'domready', () => {
                    const infoWindowContent = document.querySelector('.gm-style-iw');
                    infoWindowContent.style.padding = '10px';
                    infoWindowContent.style.borderRadius = '10px';
                    infoWindowContent.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
                    infoWindowContent.style.background = 'red';
                    //infoWindowContent.style.borderColor = 'red';
                    // You can add more custom styles as needed
                });
                */
                // Add listener for closeclick event
                window.google.maps.event.addListener(infowindow, 'closeclick', () => {
                    // Recalculate route and display it on the map
                    calcRoute(place.geometry.location);
                });

            });
        } else if (placeType === MEDITATION) {
            const marker = new window.google.maps.Marker({
                map,
                position: place.geometry.location,
                icon: icons.meditation.icon
            });
            window.google.maps.event.addListener(marker, "click", () => {

                infowindow = new window.google.maps.InfoWindow();
                infowindow.setContent(contentString);
                infowindow.setPosition(place.geometry.location);
                infowindow.setOptions({
                    maxWidth: 500,
                });
                infowindow.open(map);

                // Add listener for closeclick event
                window.google.maps.event.addListener(infowindow, 'closeclick', () => {
                    // Recalculate route and display it on the map
                    calcRoute(place.geometry.location);
                });

            });
        } else if (placeType === ACUPUNCTURE) {
            const marker = new window.google.maps.Marker({
                map,
                position: place.geometry.location,
                icon: icons.acupuncture.icon
            });
            window.google.maps.event.addListener(marker, "click", () => {

                infowindow = new window.google.maps.InfoWindow();
                infowindow.setContent(contentString);
                infowindow.setPosition(place.geometry.location);
                infowindow.setOptions({
                    maxWidth: 500,
                });
                infowindow.open(map);

                // Add listener for closeclick event
                window.google.maps.event.addListener(infowindow, 'closeclick', () => {
                    // Recalculate route and display it on the map
                    calcRoute(place.geometry.location);
                });

            });
        } else if (placeType === GUIDEDIMAGERY) {
            const marker = new window.google.maps.Marker({
                map,
                position: place.geometry.location,
                icon: icons.guidedImagery.icon
            });
            window.google.maps.event.addListener(marker, "click", () => {

                infowindow = new window.google.maps.InfoWindow();
                infowindow.setContent(contentString);
                infowindow.setPosition(place.geometry.location);
                infowindow.setOptions({
                    maxWidth: 500,
                });
                infowindow.open(map);

                // Add listener for closeclick event
                window.google.maps.event.addListener(infowindow, 'closeclick', () => {
                    // Recalculate route and display it on the map
                    calcRoute(place.geometry.location);
                });

            });
        } else if (placeType === MASSAGETHERAPY) {
            const marker = new window.google.maps.Marker({
                map,
                position: place.geometry.location,
                icon: icons.massageTherapy.icon
            });
            window.google.maps.event.addListener(marker, "click", () => {

                infowindow = new window.google.maps.InfoWindow();
                infowindow.setContent(contentString);
                infowindow.setPosition(place.geometry.location);
                infowindow.setOptions({
                    maxWidth: 500,
                });
                infowindow.open(map);

                // Add listener for closeclick event
                window.google.maps.event.addListener(infowindow, 'closeclick', () => {
                    // Recalculate route and display it on the map
                    calcRoute(place.geometry.location);
                    document.getElementById("mode").addEventListener("change", () => {
                        calcRoute(place.geometry.location);
                    });
                });
            });
        }
    }
    const calcRoute = (destination) => {
        const selectedMode = document.getElementById("mode").value;

        let directionsRequest = {
            origin: startingLocation.geometry.location,
            destination: destination,
            travelMode: window.google.maps.TravelMode[selectedMode],

        }

        directionsService.route(directionsRequest, function (result, status) {
            if (status === "OK") {
                directionsRenderer.setDirections(result);
                var travelMode = document.getElementById("mode").value;

                // Adjust the map's zoom level to fit the route
                map.fitBounds(result.routes[0].bounds);

            }
        })
    }

    const createLegend = () => {
        const legend = document.createElement("div");
        legend.id = "legend";
        legend.innerHTML = "<h3>Legend</h3>";

        for (const key in icons) {
            const type = icons[key];
            const name = type.name;
            const icon = type.icon;
            const div = document.createElement("div");
            div.innerHTML = '<img src="' + icon + '"> ' + name;
            legend.appendChild(div);
        }
        map.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(legend);
    }

    useEffect(() => {
        if (map) {
            createLegend();
            // Initialize Directions Service and Renderer
            directionsService = new window.google.maps.DirectionsService();
            directionsRenderer = new window.google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);
        }
    }, [map]);

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading maps</div>;

    return (
        <div>
            <div class = "input-container">
            <Autocomplete
                onLoad={handleAutocompleteLoad}
                onPlaceChanged={onPlaceChanged}
            >
                <input id="autocomplete" placeholder="Enter a Location" type="text" />
            </Autocomplete>

            <div id="floating-panel">
                <b>Mode of Travel: </b>
                <select id="mode">
                    <option value="DRIVING">Driving</option>
                    <option value="WALKING">Walking</option>
                    <option value="BICYCLING">Bicycling</option>
                    <option value="TRANSIT">Transit</option>
                </select>
            </div>
            
            </div>
            {isLoaded && (
                <GoogleMap
                    onLoad={handleMapLoad}
                    center={{ lat: 38.9227, lng: -77.0194 }}
                    zoom={12}
                    mapContainerStyle={{ height: "600px", width: "100%" }}
                >
                </GoogleMap>
            )}
        </div>
    );
};

export default MapComponent1;
