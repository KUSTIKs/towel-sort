// You should implement your task here.

module.exports = towelSort = (matrix = []) =>
  matrix.map((arr, i) => (i % 2 ? arr.reverse() : arr)).flat();
