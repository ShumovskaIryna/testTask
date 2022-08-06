// #6 Проверить является ли строка палиндромом
function poly(str) {
  let check = '';
  for (let i = str.length - 1; i >= 0; --i) {
    check += str[i];
  }
  return str == check;
}