if (document.querySelector('#leaflet')) {
    var greenIcon = L.icon({
        iconUrl: '/icons/marker.png',

        iconSize: [45, 50], // size of the icon
        iconAnchor: [19, 40], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
    });

    var mymap = L.map('leaflet').setView([44.98562181590544, 40.59795289813349], 15);
    L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
            attribution: '',
            maxZoom: 15,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        })
        .addTo(mymap);
    var marker = L.marker([44.98562181590544, 40.59795289813349], {
            icon: greenIcon
        })
        .setZIndexOffset(100).addTo(mymap);
    marker.bindPopup('Магазин "Зелёный мир"').openPopup();
}