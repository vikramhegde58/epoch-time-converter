"use strict";

function compareMonth(month) {
  switch (month) {
    case "JAN":
      month = 1;
      break;
    case "FEB":
      month = 2;
      break;
    case "MAR":
      month = 3;
      break;
    case "APR":
      month = 4;
      break;
    case "MAY":
      month = 5;
      break;
    case "JUN":
      month = 6;
      break;
    case "JUL":
      month = 7;
      break;
    case "AUG":
      month = 8;
      break;
    case "SEP":
      month = 9;
      break;
    case "OCT":
      month = 10;
      break;
    case "NOV":
      month = 11;
      break;
    case "DEC":
      month = 12;
      break;
  }
  return month;
}

let epoch = {
  getUnixTimeStamp: function(datetime) {
    var tempDate = ["0", "0", "0"];
    var tempTime = ["0", "0", "0"];

    if (datetime.match("^[0-3]?[0-9]/[0-1]?[0-9]/[1-2][0-9]{3}$")) {
      tempDate = datetime.split("/");
    } else if (datetime.match("^[0-3]?[0-9]-[0-1]?[0-9]-[1-2][0-9]{3}$")) {
      tempDate = datetime.split("-");
    } else if (
      datetime.match(
        "^[0-3]?[0-9]-[0-1]?[0-9]-[1-2][0-9]{3} [0-2]?[0-9]:[0-6]?[0-9]:[0-6]?[0-9]$"
      )
    ) {
      var tempDateTime = datetime.split(" ");
      tempDate = tempDateTime[0].split("-");
      tempTime = tempDateTime[1].split(":");
    } else if (
      datetime.match(
        "^[0-3]?[0-9]-[0-1]?[0-9]-[1-2][0-9]{3} [0-1]?[0-9]:[0-6]?[0-9]:[0-6]?[0-9] [APM]{2}$"
      )
    ) {
      var tempDateTime = datetime.split(" ");
      tempDate = tempDateTime[0].split("-");
      tempTime = tempDateTime[1].split(":");
      if (tempDateTime[2] === "PM" && tempTime[0] < 12) {
        tempTime[0] = parseInt(tempTime[0], 10) + 12;
      }
    } else if (
      datetime.match(
        "^[0-3]?[0-9]-[a-zA-Z]{3}-[1-2][0-9]{3} [0-2]?[0-9]:[0-6]?[0-9]:[0-6]?[0-9]$"
      )
    ) {
      var tempDateTime = datetime.split(" ");
      tempDate = tempDateTime[0].split("-");
      tempTime = tempDateTime[1].split(":");
      tempDate[1] = compareMonth(tempDate[1]);
    } else if (
      datetime.match(
        "^[0-3]?[0-9]-[a-zA-Z]{3}-[1-2][0-9]{3} [0-1]?[0-9]:[0-6]?[0-9]:[0-6]?[0-9] [APM]{2}$"
      )
    ) {
      var tempDateTime = datetime.split(" ");
      tempDate = tempDateTime[0].split("-");
      tempTime = tempDateTime[1].split(":");
      tempDate[1] = compareMonth(tempDate[1]);
      if (tempDateTime[2] === "PM" && tempTime[0] < 12) {
        tempTime[0] = parseInt(tempTime[0], 10) + 12;
      }
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
  }
};
module.exports = epoch;
