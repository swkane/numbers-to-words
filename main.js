var ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

for (var i = 1; i <= 1000; i++) {
  if (i < 20) {
    document.write(ones[i]+'<br>');
  } else {
    var digits = String(i);
    if (i < 100) {
      var ten = Number(digits[0]);
      var one = Number(digits[1]);
      document.write(tens[ten] + " " + ones[one]+ '<br>');
    } else if (i < 1000) {
      var hundred = Number(digits[0]);
      var ten = Number(digits[1]);
      var one = Number(digits[2]);
      document.write(ones[hundred] + " " + "hundred " + tens[ten] + " " + ones[one] + '<br>');
    } else {
      document.write('one thousand');
    }
  }
}
