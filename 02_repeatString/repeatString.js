const repeatString = function(string, num) {
  let result = "";

  if (num < 0) {
    return "ERROR";
  }
  // console.log(string, num);
  for (let i = 1; i <= num; i++) {
    result += string;
    // console.log(result);
  }
  // console.log(result);
  return result;
};

// Do not edit below this line
module.exports = repeatString;
