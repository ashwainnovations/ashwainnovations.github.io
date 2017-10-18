$(window).load(function() {
    "use strict";
    
    function fullScreenContainer() {
    
        var screenWidth = $(window).width() / 2 + "px";
        var screenHeight = $(window).height() + "px";
        
        $("#map").css({
        width: screenWidth,
        height: screenHeight
        });
        
        $(window).resize( function () {
        
        var screenWidth = $(window).width() / 2 + "px";
        var screenHeight = $(window).height() + "px";
        
        $("#map").css({
        width: screenWidth,
        height: screenHeight
        });
        
        });
    
    }

    fullScreenContainer();

});

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', init);

function init() {

    // Basic options for a simple Google Map
    // The latitude and longitude to center the map (always required)
    var center = new google.maps.LatLng(12.9549847, 77.59148679999998);
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var isDraggable = $(document).width() > 1024 ? true : false; // If document (your website) is wider than 1024px, isDraggable = true, else isDraggable = false

    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13,
        scrollwheel: false,
        draggable: isDraggable,
        center: center,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": 33
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#f2f3f7"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c5dac6"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c5c6c6"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e4d7c6"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#fbfaf7"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#acbcc9"
            }]
        }]
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions, center);

    var locations = [
        ['<h6>Ashwa Innovations</h6><p class="map-p">This is where we are currently<br><i class="fa fa-coffee"></i> Visit us, we pay the coffee!<br> <a href="https://goo.gl/maps/Xf8oixcZpfs" target="_blank">Click Here To Get Directions</a></p>', 12.9549847, 77.59148679999998, 1]    ];

    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    var image = 'img/logo-map.png';

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: image
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}
