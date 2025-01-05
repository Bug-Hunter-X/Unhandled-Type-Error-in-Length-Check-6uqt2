function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined
  } else if (typeof x === 'object' && x.length !== undefined) {
    return x.length;
  } else {
    return NaN; //or throw new Error('Invalid input')
  }
}