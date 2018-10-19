const epoch = require('./epoch');

console.log("90/02/2018");
console.log(epoch.getUnixTimeStamp("90/02/2018"));
console.log("01-02-2018");
console.log(epoch.getUnixTimeStamp("01-02-2018"));
console.log("01-02-2018 3:34:56");
console.log(epoch.getUnixTimeStamp("01-02-2018 3:34:56"));
console.log("01-FEB-2018 3:34:56");
console.log(epoch.getUnixTimeStamp("01-FEB-2018 3:34:56"));
console.log("01-02-2018 3:34:56 PM");
console.log(epoch.getUnixTimeStamp("01-02-2018 3:34:56 AM"));
console.log("01-022018");
console.log(epoch.getUnixTimeStamp("01-022018"));
console.log("1517423400");
console.log(epoch.getHumanFormat("1517423400"));