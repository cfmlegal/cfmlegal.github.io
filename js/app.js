$(document).foundation();

function initialize() {
    var office = new google.maps.LatLng(32.1586959, 34.8066168);

    var mapOptions = {
        center: office,
        zoom: 15
    };

    var map = new google.maps.Map(document.getElementById("contactmap"),
        mapOptions);

    var marker = new google.maps.Marker({
        position: office,
        map: map,
        title:"Hahoshlim 6, Herzeliya Pituach"
    });

    var contentString = '<div class="mapinfo">HaHoshlim 6, Herzeliya Pituach</div>'
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', initialize);