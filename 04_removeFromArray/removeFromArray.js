function removeFromArray(array, ...elementsToRemove) {
  return array.filter(item => !elementsToRemove.includes(item));
}

console.log(removeFromArray([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;
