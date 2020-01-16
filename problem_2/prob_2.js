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
gcd(1679, 874);
gcd(3762, 4047);
gcd(6080, 3876);
gcd(18, 45);
