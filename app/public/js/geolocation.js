var telAviv = {
  lat: 32.109333,
  lng: 34.855499,
};
var eilat = {
  lat: 29.55,
  lng: 34.95,
};
var rehovot = {
  lat: 31.9333,
  lng: 34.8,
};
var beerSheva = {
  lat: 31.2589,
  lng: 34.7978,
};
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;
  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  minimalDist(pos);
}
function minimalDist(pos) {
  var crd = pos.coords;
  var bestLoc;
  var dist1 = getDistanceFromLatLonInKm(
    crd.latitude,
    telAviv.lat,
    crd.longitude,
    telAviv.lng
  );
  var dist2 = getDistanceFromLatLonInKm(
    crd.latitude,
    beerSheva.lat,
    crd.longitude,
    beerSheva.lng
  );
  var dist3 = getDistanceFromLatLonInKm(
    crd.latitude,
    eilat.lat,
    crd.longitude,
    eilat.lng
  );
  var dist4 = getDistanceFromLatLonInKm(
    crd.latitude,
    rehovot.lat,
    crd.longitude,
    rehovot.lng
  );

  var min = Math.min(dist1, dist2, dist3, dist4);
  if (min == dist1) {
    bestLoc = "Tel Aviv";
  } else if (min == dist2) {
    bestLoc = "Beer Sheva";
  } else if (min == dist3) {
    bestLoc = "Eilat";
  } else {
    bestLoc = "Rehovot";
  }
  alert("The closest city to your location is:" + " " + bestLoc);
  window.location.href = `/findNearLocation?city=${bestLoc}`;
}
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
var geoError = function (code, message) {
  alert(code + message);
};

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
