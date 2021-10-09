const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

function chooseStations(stations) {
  let goodStations = [];
  for (const station of stations) {
    const capacity = station[1];

    if (capacity >= 20) {
      const type = station[2];
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));
// for (let i = 0; i < stations.length; i++) {
//   for (let n = 0; n < stations[i].length; n++) {
//     if (
//       stations[i][1] > 20 &&
//       (stations[i][n] === "school" || stations[i][n]) === "comunity center"
//     ) {
//       goodStations.push(stations[i][0]);
//     }
//   }
// }
// console.log(goodStations);
