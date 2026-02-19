(function() {
    'use strict';

    function initMap() {
        var wrapper = document.getElementById('map-wrapper');
        if (!wrapper) return;

        var canvas = document.getElementById('map-canvas');
        if (canvas) canvas.style.display = 'none';

        wrapper.style.position = 'relative';
        wrapper.style.overflow = 'hidden';

        var iframe = document.createElement('iframe');
        iframe.src = 'https://maps.google.com/maps?ll=40.74857,-73.98740&z=16&hl=en&output=embed';
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.cssText = 'border:0;filter:grayscale(1) contrast(0.9) brightness(1.1);';
        iframe.allowFullscreen = true;
        iframe.loading = 'lazy';
        iframe.title = 'Sweet Churros Location';
        wrapper.appendChild(iframe);

        var marker = document.createElement('div');
        marker.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:20px;height:20px;background:#C8973E;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3);pointer-events:none;z-index:10;';
        wrapper.appendChild(marker);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMap);
    } else {
        initMap();
    }
})();
