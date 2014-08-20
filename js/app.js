$(document).foundation();

function initialize() {
    var office = new google.maps.LatLng(32.1302077,34.7937857);

    var mapOptions = {
        center: office,
        zoom: 15,
        scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById("contactmap"),
        mapOptions);

    var marker = new google.maps.Marker({
        position: office,
        map: map,
        title:"9/40 Avigur, Tel Aviv"
    });

    var contentString = '<div class="mapinfo">9/40 Avigur, Tel Aviv</div>'
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', initialize);

$(function() {
    $("header").localScroll({
        offset: -100
    });
});