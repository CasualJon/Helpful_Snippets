// Efficent algorithm to find prime numbers in JavaScript

let isPrime_explained = (n) => {
  // Because 2 is the only even prime, and because we below check for even-ness of the
  // number as a way to exclude it
  if (n === 2) return true;
  
  // Because a prime number must be an integer, and 
  // Because primes must be positive and - by definition - neither 0 or 1 are prime, and
  // Because even numbers - aside from 2 - cannot be prime
  if (!Number.isInteger(n) || n < 2 || !(n % 2)) return false;
  
  // Notes:
  // A) We start at 3 because lower cases are defined above
  // B) Except for the case of non-prime squares (like 5*5), one coefficient will always be smaller
  //    than the other when checking for factors; and because
  // C) Checking (2*6) as a factor is the same thing as checking (6*2), we only need to check the 
  //    coefficients up to the square root of the input, n
  // D) Because (again, aside from 2) even numbers cannot be prime, we only need to check odd 
  //    numbers, thus i +=2 in loop
  for (let i = 3; i < Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  
  // If we're here, well congrats, you have a prime number
  return true;
};


let isPrime = (n) => {
  if (n === 2) return true;
  if (!Number.isInteger(n) || n < 2 || !(n % 2)) return false;
  for (let i = 3; i < Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}
