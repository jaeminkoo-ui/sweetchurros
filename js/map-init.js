function initMap() {
    var canvas = document.getElementById('map-canvas');
    if (!canvas) return;

    var location = { lat: 40.7477348, lng: -73.9861939 };

    var map = new google.maps.Map(canvas, {
        zoom: 16,
        center: location,
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        styles: [
            { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
            { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
            { featureType: "administrative", elementType: "geometry", stylers: [{ visibility: "off" }] },
            { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
            { featureType: "poi", stylers: [{ visibility: "off" }] },
            { featureType: "road", elementType: "geometry", stylers: [{ color: "#e0e0e0" }] },
            { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
            { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#e0e0e0" }] },
            { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] },
            { featureType: "road.highway", elementType: "labels", stylers: [{ visibility: "off" }] },
            { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#c0c0c0" }] },
            { featureType: "transit", stylers: [{ visibility: "off" }] },
            { featureType: "water", elementType: "geometry", stylers: [{ color: "#e8e8e8" }] },
            { featureType: "water", elementType: "labels", stylers: [{ visibility: "off" }] }
        ]
    });

    new google.maps.Marker({
        position: location,
        map: map,
        title: 'Sweet Churros',
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#C8973E',
            fillOpacity: 1,
            strokeColor: '#FFFFFF',
            strokeWeight: 3
        }
    });
}
