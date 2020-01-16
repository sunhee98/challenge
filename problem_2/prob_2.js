function gcd(a, b) {
  while (a !== b) {
    if (a > b) {
      a = a - b;
      b = b;
    } else {
      b = b - a;
      a = a;
    }
  }
  console.log(a);
}
gcd(78696, 19332);
