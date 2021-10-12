let multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return "Please provide two numbers.";
  } else if (typeof num2 !== "number") {
    return "Please provide two numbers.";
  }

  return num1 * num2;
};

console.log(multiply(3, 20));
