// 1번 문제
function singleGCD(number1, number2) {
  if (numberCheck(number1, number2) === 0) {
    return 0;
  }
  number1 = Math.abs(number1);
  number2 = Math.abs(number2);
  [number1, number2] = swap(number1, number2);
  console.log(uclid(number1, number2));
}

function swap(number1, number2) {
  if (number1 < number2) {
    [number1, number2] = [number2, number1];
  }
  return [number1, number2];
}

function uclid(number1, number2) {
  do {
    [number1, number2] = [number2, number1 % number2];
  } while (number2 !== 0);
  return number1;
}

//2번 문제
function multiGCD() {
  let arrayNumber = Array.from(arguments).sort(function(number1, number2) {
    return number2 - number1;
  });
  for (let key in arrayNumber) {
    if (numberCheck(arrayNumber[key]) === 0) {
      return 0;
    }
    arrayNumber[key] = Math.abs(arrayNumber[key]);
  }
  gcd(arrayNumber);
  console.log(arrayNumber[0]);
}

function gcd(arrayNumber) {
  while (arrayNumber.length !== 1) {
    do {
      [arrayNumber[0], arrayNumber[1]] = [arrayNumber[1], arrayNumber[0] % arrayNumber[1]];
    } while (arrayNumber[1] !== 0);
    arrayNumber.splice(1, 1);
    arrayNumber.sort(function(number1, number2) {
      return number2 - number1;
    });
  }
  return;
}

// 숫자 검사 함수
function numberCheck() {
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'number' || arguments[i] === 0) {
      console.error('잘못된 값 입력');
      return 0;
    }
  }
  return 1;
}

singleGCD(-72000, -19332);
multiGCD(-78696, -19332, 3600, 72000);
