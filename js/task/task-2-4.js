function formatString(string, maxLength = 40) {
  if (string.length > maxLength) {
    string = string.slice(0, maxLength) + "...";
  }
  return string;
}
console.log("Curabitur ligula sapien, tincidunt non.".length);
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log("Vestibulum facilisis, purus nec pulvinar iaculis.".length);
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log("Vestibulum facilisis, purus nec pulvinar iaculis.".length);
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'