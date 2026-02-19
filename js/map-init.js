var mapLoaded = false;

function initMap() {
    var location = { lat: 40.74857, lng: -73.98740 };

    try {
        var map = new google.maps.Map(document.getElementById('map-canvas'), {
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

        var marker = new google.maps.Marker({
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

        google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
            mapLoaded = true;
        });
    } catch(e) {
        showMapFallback();
    }
}

function showMapFallback() {
    var wrapper = document.getElementById('map-wrapper');
    if (!wrapper) return;

    var canvas = document.getElementById('map-canvas');
    if (canvas) canvas.style.display = 'none';

    wrapper.style.position = 'relative';
    wrapper.style.overflow = 'hidden';

    var iframe = document.createElement('iframe');
    iframe.src = 'https://maps.google.com/maps?q=11+W+32nd+St,+New+York,+NY+10001&z=16&hl=en&output=embed';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.cssText = 'border:0;filter:grayscale(1) contrast(0.9) brightness(1.1);';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    iframe.title = 'Sweet Churros Location';
    wrapper.appendChild(iframe);

    var cover = document.createElement('div');
    cover.style.cssText = 'position:absolute;top:0;left:0;width:300px;height:130px;background:linear-gradient(160deg,#e6e6e6 50%,#eaeaea 65%,#eeeeee 78%,transparent 95%);pointer-events:none;z-index:10;';
    wrapper.appendChild(cover);
}

setTimeout(function() {
    if (!mapLoaded) showMapFallback();
}, 3000);
