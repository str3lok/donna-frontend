function initMap() {
    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(-8.513049631957628, 115.26072236541017),
        disableDefaultUI: true,
        // scrollwheel: false,
        // zoomControl: false,
        // streetViewControl: false,
        // mapTypeControl: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"saturation":"0"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#6e3a35"},{"saturation":"0"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#6e3a35"},{"saturation":"0"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.icon","stylers":[{"color":"#6e3a35"},{"saturation":"0"},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#efebea"},{"saturation":"0"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#af9d94"},{"saturation":"0"},{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"color":"#6e3a35"},{"saturation":"0"}]},{"featureType":"landscape","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"saturation":"0"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"hue":"#ff0000"},{"saturation":"34"},{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6e3a35"},{"saturation":"0"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#6e3a35"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"},{"lightness":"60"},{"gamma":"1.00"},{"hue":"#ff0000"},{"saturation":"-90"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"saturation":"0"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"},{"weight":"0.01"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"color":"#bfb1a9"},{"saturation":"0"}]},{"featureType":"transit","elementType":"geometry.stroke","stylers":[{"color":"#bfb1a9"},{"saturation":"0"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#6e3a35"},{"saturation":"0"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"saturation":"-90"},{"lightness":"0"},{"gamma":"1.00"},{"weight":"1"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dfd8d4"},{"saturation":"0"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"saturation":"0"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#6e3a35"},{"saturation":"0"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-8.513049631957628, 115.26072236541017),
        map: map,
        icon: {
            url: "images/icons/svg/icon-pin.svg",
            scaledSize: new google.maps.Size(42, 56)
        },
        title: 'Donna'
    });
}
