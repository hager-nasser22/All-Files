navigator.geolocation.getCurrentPosition(success, error);

var lng, lat , myLatLng;
function success(pos) {
    lat = pos.coords.latitude;
    lng = pos.coords.longitude;

    initMap(lat, lng);
}

function error(e) {
    alert(e.message);
}


function initMap(myLat, myLng) {
    const myLatLng = { lat: myLat, lng: myLng };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatLng,
    });

    map.addListener("click", function (e) {
        console.log(e.latLng.lat(), e.latLng.lng());
    });

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });
}
var city = document.getElementById("city");
city.addEventListener("change" , function (){
    var myLatLng;
    if(city.value == "Egypt"){
        myLatLng = { lat: 30.03706242831614, lng: 31.24977188633433 };
    }
    else if(city.value == "Canada"){
        myLatLng = { lat: 54.24424716857368, lng: 102.37035797460327 };
    }
    else if(city.value == "US"){
        myLatLng = { lat: 38.93148142232926, lng: -102.37035797460327 };
    }
    initMap(myLatLng.lat , myLatLng.lng);
});
window.initMap = initMap;
