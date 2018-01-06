var numbers = [2, 3, 4, 5];

function sum (numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}


console.log(sum(numbers));
console.log(sum([6, 8, 0, 8, 3]));