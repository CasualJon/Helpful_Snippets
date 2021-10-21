// Efficient way to remove duplicates from an Array in JavaScript
// NOTE: Does not sort/order the values in any way

// Takes an input array...
let removeDups_explained = (arr) => {
  // Using the JS Set class, which only stores unique values given set arithmetic (vs bags)
  // However, since we don't want a set object returned, but instead a clean array
  // we use the spread operator (...) on the Set object that is wrapped in array brackets
  return [... new Set(arr)];
}

// Simplified
let removeDups = (arr) => { return [... new Set(arr)]; }
