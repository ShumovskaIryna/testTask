// #2 Реализовать функцию сортировки пузырьком

function sortArrayBubble(array) {
  for (let i = 0, stor; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        stor = array[j];
        array[j] = array[j + 1];
        array[j + 1] = stor;
      }
    }
  }
  return array;
}
sortArrayBubble([1, 3, 5, 4, 2])
