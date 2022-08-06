// #1 Задан массив целых чисел. Написать функцию нахождения максимального элемента в массиве.

function findMax(array) {
  let max = array[0];

  for (let i = 1; i = array.length - 1; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }

  return max;
}
findMax([1, 3, 5, 4, 2])
