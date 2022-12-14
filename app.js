var birthdayInput = document.querySelector("#user-birthday");
var showBtn = document.querySelector("#show-button");
var birthdayOutput = document.querySelector("#output");

function reverseStr(str) {
  var listOfChars = str.split("");
  var reverseListOfChars = listOfChars.reverse();
  var joinReverseListOfChars = reverseListOfChars.join("");
  return joinReverseListOfChars;
}

function isPalindrome(str) {
  var reverse = reverseStr(str);
  return str === reverse;
}

function convertNumberToString(date) {
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

function getAllDateFormats(date) {
  var dateStr = convertNumberToString(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForAllDateFormats(date) {
  var listOfFormats = getAllDateFormats(date);
  var isItPalindrome = false;
  for (var i = 0; i < listOfFormats.length; i++) {
    if (isPalindrome(listOfFormats[i])) {
      isItPalindrome = true;
      break;
    }
  }
  return isItPalindrome;
}

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

function getNextDate(date) {
  var day = Number(date.day) + 1;
  var month = date.month;
  var year = date.year;
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month == 2) {
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month++;
      }
    } else {
      if (day > 28) {
        day = 1;
        month++;
      }
    }
  } else {
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month++;
    }
  }

  if (month > 12) {
    month = 1;
    year++;
  }
  return {
    day: day,
    month: month,
    year: year,
  };
}
function getPreviousDate(date) {
  var day = date.day - 1;
  var month = date.month;
  var year = date.year;
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (day == 0) {
    month--;
    if (month == 2) {
      if (isLeapYear(year)) {
        day = 29;
      } else {
        day = 28;
      }
    }
    if (month != 2) {
      day = daysInMonth[month - 1];
    }
  }
  if (month === 0) {
    day = 31;
    month = 12;
    year--;
  }

  return {
    day: day,
    month: month,
    year: year,
  };
}

function getNextPalindromeDate(date) {
  var ctr = 0;
  var nextDate = date;
  while (1) {
    var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
    if (isPalindrome) {
      break;
    } else {
      ctr++;
      nextDate = getNextDate(nextDate);
    }
  }
  return [ctr, nextDate];
}

function getPreviousPalindromeDate(date) {
  var previousCtr = 0;
  var previousDate = date;
  while (1) {
    var isPalindrome = checkPalindromeForAllDateFormats(previousDate);
    if (isPalindrome) {
      break;
    } else {
      previousCtr++;
      previousDate = getPreviousDate(previousDate);
    }
  }
  return [previousCtr, previousDate];
}
function clickHandler() {
  var bdayStr = birthdayInput.value;

  if (bdayStr !== "") {
    var listOfDate = bdayStr.split("-");
  }

  var date = {
    day: Number(listOfDate[2]),
    month: Number(listOfDate[1]),
    year: Number(listOfDate[0]),
  };

  var isPalindrome = checkPalindromeForAllDateFormats(date);

  if (isPalindrome) {
    birthdayOutput.innerText = "Yayy! Your birthday is a Palindrome!!????????";
  } else {
    var [ctr, nextDate] = getNextPalindromeDate(date);
    var [previousCtr, previousDate] = getPreviousPalindromeDate(date);

    if (ctr < previousCtr) {
      birthdayOutput.innerText =
        "Your birthday isn't a Palindrome... The nearest Palindrome date is " +
        nextDate.day +
        "-" +
        nextDate.month +
        "-" +
        nextDate.year +
        ". It is " +
        ctr +
        " days later.????";
    } else {
      birthdayOutput.innerText =
        "Your birthday isn't a Palindrome... The nearest Palindrome date is " +
        previousDate.day +
        "-" +
        previousDate.month +
        "-" +
        previousDate.year +
        ". It was " +
        previousCtr +
        " days ago.????";
    }
  }
}
showBtn.addEventListener("click", clickHandler);
