

var morLocation = {
  lat:40,
  lng:35,
}

var lironLocation ={
  lat:50,
  lng:80,

}
var ShirLocation ={
  lat:20,
  lng:10,

}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  minimalDist(pos);

};
function minimalDist (pos){
  var crd = pos.coords;
  var babysitter;
  var dist1 = getDistanceFromLatLonInKm(crd.latitude,morLocation.lat,crd.longitude,morLocation.lng);
  var dist2 = getDistanceFromLatLonInKm(crd.latitude,lironLocation.lat,crd.longitude,lironLocation.lng);
  var dist3 = getDistanceFromLatLonInKm(crd.latitude,ShirLocation.lat,crd.longitude,ShirLocation.lng);
  var min = Math.min(dist1,dist2,dist3);
  if (min==dist1){
    babysitter= "Mor Badnani";

  }else if(min==dist2){
    babysitter= "Liron Perets";
  }
  else{
    babysitter="Shir Dahan";
  }
  alert("The closest babysitter to your location is:"+" "+babysitter);
  
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
var geoError = function(code, message) {
  alert(code + message);
};

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);