function averageOfSmallestOddAndLargestEven(numbers) {
    let smallestOdd = Infinity;
    let largestEven = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (number % 2 === 0 && number > largestEven) {
        largestEven = number;
      } else if (number % 2 === 1 && number < smallestOdd) {
        smallestOdd = number;
      }
    }
    if (smallestOdd === Infinity || largestEven === -Infinity) {
      return null;
    } else {
      return (smallestOdd + largestEven) / 2;
    }
}

console.log(averageOfSmallestOddAndLargestEven([5,3,2,4,6]));