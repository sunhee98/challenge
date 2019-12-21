// 1번 문제
function q1(number1, number2) {
  if (numcheck(number1, number2) === 0) return 0;
  number1 = Math.abs(number1);
  number2 = Math.abs(number2);
  swap(number1, number2);
}

function swap(number1, number2) {
  if (number1 < number2) {
    [number1, number2] = [number2, number1];
  }
  const number_uclid = uclid(number1, number2);
  if (typeof number_uclid === 'number') console.log(number_uclid);
}

function uclid(number1, number2) {
  let number_mod;
  number_mod = number1 % number2;
  if (number_mod === 0) {
    return number2;
  }
  swap(number2, number_mod);
}

//2번 문제
function q2() {
  let array_number = Array.from(arguments).sort(function(number1, number2) {
    return number2 - number1;
  });
  for (let key in array_number) {
    if (numcheck(array_number[key]) === 0) return 0;
    array_number[key] = Math.abs(array_number[key]);
  }
  gcd(array_number);

  console.log(array_number[0]);
}

function gcd(array_number) {
  if (array_number.length === 1) return 0;
  let number_mod;
  do {
    number_mod = array_number[0] % array_number[1];
    [array_number[0], array_number[1]] = [array_number[1], number_mod];
    if (number_mod === 0) {
      array_number.splice(1, 1);
      array_number.sort(function(number1, number2) {
        return number2 - number1;
      });
      gcd(array_number);
    }
  } while (number_mod !== 0);
}

function numcheck() {
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'number' || arguments[i] === 0) {
      console.log('잘못된 값 입력');
      return 0;
    }
  }
  return 1;
}

q1(70, -35);
q2(72, 36, -108, 144, 18);
