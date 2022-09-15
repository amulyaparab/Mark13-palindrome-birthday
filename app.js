function reverseStr(str) {
  var listOfChars = str.split("");
  var resverseListOfChars = listOfChars.reverse();
  var joinReversedListOfChars = resverseListOfChars.join("");
  return joinReversedListOfChars;
}

function isPalindrome(str) {
  var reverse = reverseStr(str);
  return str === reverse;
}

// var str = "racecar";
// console.log(isPalindrome(str));

function convertNumberToStr(date) {
  var dateStr = { day: "", month: "", year: "" };
  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  } else {
    dateStr.day = date.day.toString();
  }
  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  } else {
    dateStr.month = date.month.toString();
  }
  dateStr.year = date.year.toString();
  return dateStr;
}

var date = {
  day: "15",
  month: "7",
  year: "2020",
};

console.log(convertNumberToStr(date));
