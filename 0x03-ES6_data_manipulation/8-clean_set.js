export default function cleanSet(set, startString) {
  const result = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.substring(startString.length));
    }
  }
  return result.join('-');
}

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
