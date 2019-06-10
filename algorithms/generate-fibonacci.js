var fib = []; // Initialize array!

// define the first two
fib[0] = 0;
fib[1] = 1;

// the rest we can compute
for (var i = 2; i <= 10; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}
