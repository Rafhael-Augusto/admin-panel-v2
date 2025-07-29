export function toLowerCaseFirst(word: string) {
  return word.charAt(0).toLowerCase() + word.slice(1);
}

export function toUpperCaseFirst(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
