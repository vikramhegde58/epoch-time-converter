"use strict";

let epoch = {
  getUnixTimeStamp: function(datetime) {
    var tempDate = ["0", "0", "0"];
    var tempTime = ["0", "0", "0"];
    if(datetime.match("^[0-3]?[0-9]\/[0-1]?[0-9]\/[1-2][0-9]{3}$")){
        tempDate = datetime.split("/");
    } else if(datetime.match("^[0-3]?[0-9]-[0-1]?[0-9]-[1-2][0-9]{3}$")){
        tempDate = datetime.split("-");
    } else if(datetime.match("^[0-3]?[0-9]-[0-1]?[0-9]-[1-2][0-9]{3} [0-2]?[0-9]:[0-6]?[0-9]:[0-6]?[0-9]$")){
        var tempDateTime = datetime.split(" ");
        tempDate = tempDateTime[0].split("-");
        tempTime = tempDateTime[1].split(":");
        console.log(tempDateTime);
        console.log(tempDate);
        console.log(tempTime);
    } else {
      return "Error";
    }
      var milliTime = new Date(
        tempDate[2],
        tempDate[1] - 1,
        tempDate[0],
        tempTime[0],
        tempTime[1],
        tempTime[2]
      );
      return milliTime.getTime() / 1000; // Unix timestamp
  },

  getHumanFormat: function(unixTimeStamp) {
    var fullDate = new Date(unixTimeStamp * 1000);
    var date = fullDate.getDate();
    var month = fullDate.getMonth() + 1;
    var year = fullDate.getFullYear();
    return date + "-" + month + "-" + year;
  },
  
};
module.exports = epoch;
