function reverseStr(str) {
  var listOfChars = str.split("");
  var reverseListOfChars = listOfChars.reverse();
  var joinReverseListOfChars = reverseListOfChars.join("");
  return joinReverseListOfChars;
}

function isPalindrome(str) {
  var reverse = reverseStr(str);
  str === reverse;
}

function convertNumberToString(date) {
  dateStr = { day: "", month: "", year: "" };
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
  day: "13",
  month: "14",
  year: "1990",
};

console.log(convertNumberToString(date));
