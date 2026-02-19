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

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMap);
    } else {
        initMap();
    }
})();
