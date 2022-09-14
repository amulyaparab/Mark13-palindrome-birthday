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

function convertNumberToStr(dateStr) {
  if (dateStr.day > 10) {
    dateStr.day = "0" + dateStr.day;
  } else {
    dateStr.day = dateStr.day.toString();
  }
  if (dateStr.month > 10) {
    dateStr.month = "0" + dateStr.month;
  } else {
    dateStr.month = dateStr.month.toString();
  }
  dateStr.year = dateStr.year.toString();
}

var dateStr = {
  day: "4",
  month: "2",
  year: "2020",
};

console.log(typeof dateStr);
