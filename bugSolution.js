function myFunction(a, b) {
  if (a === 0) {
    return 0; 
  }
  if (b === 0) {
    return a; 
  }
  return myFunction(a - 1, b - 1) + myFunction(a -1, b); 
}