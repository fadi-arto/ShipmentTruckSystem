var taxiIcon = L.icon({
    iconUrl: markers,
    iconSize: [35, 35]
  })
  var start = L.latLng(33.51340843842325, 36.27665419318823);
  var end = L.latLng(33.5, 37.28);

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248f4f3ad852a6d4cf2902fe785b4eee627&start=' + start.lng + ',' + start.lat + '&end=' + end.lng + ',' + end.lat, true);
  xhr.onload = function () {
    console.log(this.response);
    var data = JSON.parse(this.response);
    console.log('Estimated travel time: ' + data.features[0].properties.segments[0].duration / 60 + ' minutes');
  };
  xhr.send();
 function calculate_distance(lat1,lon1,lat2,lon2){
  const R = 6371e3; // metres
  const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in metres
  console.log( "distace is : " +d);
 }
 calculate_distance(33.51340843842325, 36.27665419318823,33.5, 37.28)
  // var marker = L.marker([33.51340843842325, 36.27665419318823], { icon: taxiIcon }).bindPopup(`<h1 width="300" height="300" >${33.51340843842325}</h1><h1 width="300" height="300" >${36.27665419318823}</h1>`).addTo(map);
  // var marker2 = L.marker([33.5072204116006, 36.26578269587441], { icon: taxiIcon }).addTo(map);

  // var latlng1 = L.latLng(33.51340843842325, 36.27665419318823);
  // var latlng2 = L.latLng(33.5094068157322, 36.28013591089733);

  // var distance = latlng1.distanceTo(latlng2);
  // console.log(distance + " meters");
//     var control = L.Routing.control({
//   waypoints: [
//     L.latLng(57.74, 11.94),
//     L.latLng(57.6792, 11.949)
//   ],
//   routeWhileDragging: true,
//   geocoder: L.Control.Geocoder.nominatim(),
//   router: L.Routing.graphHopper('97d1920e-fe28-4b55-becb-0fc82f53c255' , {
//     urlParameters: {
//         vehicle: 'car'
//     }
//   })
// }).addTo(map);
const query = new URLSearchParams({
profile: 'bike',
point: '33.51340843842325, 36.27665419318823',
point_hint: '33.51340843842325, 36.25665419318823',
snap_prevention: 'string',
curbside: 'any',
locale: 'en',
elevation: 'false',
details: 'string',
optimize: 'false',
instructions: 'true',
calc_points: 'true',
debug: 'false',
points_encoded: 'true',
'ch.disable': 'false',
heading: '0',
heading_penalty: '120',
pass_through: 'false',
algorithm: 'round_trip',
'round_trip.distance': '10000',
'round_trip.seed': '13.5',
'alternative_route.max_paths': '2',
'alternative_route.max_weight_factor': '1.4',
'alternative_route.max_share_factor': '0.6',
key: '97d1920e-fe28-4b55-becb-0fc82f53c255'
}).toString();

const resp = await fetch(
`https://graphhopper.com/api/1/route?${query}`,
{method: 'GET'}
);

const data = await resp.text();
console.log(data);
  // var latlng1 = [33.51340843842325, 36.27665419318823];
  // var latlng2 = [33.5094068157322, 37.28013591089733];

  // var requestUrl = 'https://api.openrouteservice.org/v2/directions/driving-car?api_key=' + '5b3ce3597851110001cf6248f4f3ad852a6d4cf2902fe785b4eee627' + '&start=' + latlng1[1] + ',' + latlng1[0] + '&end=' + latlng2[1] + ',' + latlng2[0];
  // // var requestUrl2 = 'https://api.openrouteservice.org/v2/directions/cycling-regular?api_key=' + '5b3ce3597851110001cf6248f4f3ad852a6d4cf2902fe785b4eee627' + '&start=' + latlng1[1] + ',' + latlng1[0] + '&end=' + latlng2[1] + ',' + latlng2[0];

  // fetch(requestUrl)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     console.log("Time driving-car: " + data.features[0].properties.segments[0].duration + " seconds");
  //   });
  // fetch(requestUrl2)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log("Time cycling-regular : " + data.features[0].properties.segments[0].duration + " seconds");
  //   });

  function createMarker() {
    var markerFrom = L.circleMarker([33.51340843842325, 36.27665419318823], { color: "yellow", radius: 10 });
    var markerTo = L.circleMarker([33.5094068157322, 37.28013591089733], { color: "#4AFF00", radius: 10 });
    var from = markerFrom.getLatLng();
    var to = markerTo.getLatLng();
    markerFrom.bindPopup('Delhi ' + (from).toString());
    markerTo.bindPopup('Mumbai ' + (to).toString());
    map.addLayer(markerTo);
    map.addLayer(markerFrom);
    getDistance(from, to);
    console.log(from);
  }

  function getDistance(from, to) {
    console.log(("New Delhi to Mumbai - " + (from.distanceTo(to)).toFixed(0) / 1000) + ' km');
  }

  createMarker()

  $.get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=33.51340843842325&lon=36.27665419318823', function (data) {
    console.log(data.address.road);
  });
  var geocoder = new L.Control.Geocoder.Nominatim();

  geocoder.geocode('شارع الملك فيصل دمشق', function (results) {
    console.log(results[0].center.lat);
    console.log(results[0].center.lng);
    map.setView([results[0].center.lat, results[0].center.lng], 13);
    L.marker([results[0].center.lat, results[0].center.lng], { icon: taxiIcon }).addTo(map)

  });
  // var router = L.Routing.osrmv1(), waypoints = [], line;
  // waypoints.push({ latLng: L.latLng(33.5094068157322, 38.28013591089733) });
  // waypoints.push({ latLng: L.latLng(33.5072204116006, 36.26578269587441) });
  // waypoints.push({ latLng: L.latLng(33.51340843842325, 36.27665419318823) });
  // router.route(waypoints, function (err, routes) {
  //   if (line) {
  //     map.removeLayer(line);
  //   }
  //   if (err) {
  //     alert(err);
  //     console.log(err)
  //   } else {
  //     line = L.Routing.line(routes[0]).addTo(map);
  //   }
  // });
  // print the current location i click
  map.on('click', function (e) {

    console.log(e.latlng)
  })

