// #1번 문제
function getArea(shapeType, unit1, unit2, unit3) {
  let value;
  if (!errorCheck(arguments)) {
    return;
  }
  switch (shapeType) {
    case 'circle':
      value = getCircleArea(unit1, unit2);
      break;
    case 'parallelogram':
      value = getParallelogramArea(unit1, unit2);
      break;
    case 'trapezoid':
      value = getTrapezoidArea(unit1, unit2, unit3);
      break;
    default:
      return;
  }
  sequenceList.list.push(shapeType);
  console.log(Number(value.toFixed(4)));
}

// #2번 문제
function getAreaAvg(shapeType) {
  const value = [];
  let avg = 0;
  let argumentsLength = getArgumentsLength(shapeType) - 1;
  if (!errorCheckAvg(arguments)) {
    return;
  }
  if (shapeType === 'circle') {
    argumentsLength--;
  }
  for (let i = 0; i < (arguments.length - 1) / argumentsLength; i++) {
    switch (shapeType) {
      case 'circle':
        value.push(getCircleArea(arguments[i + 1], 3.14));
        break;
      case 'parallelogram':
        value.push(getParallelogramArea(arguments[i * 2 + 1], arguments[i * 2 + 2]));
        break;
      case 'trapezoid':
        value.push(getTrapezoidArea(arguments[i * 3 + 1], arguments[i * 3 + 2], arguments[i * 3 + 3]));
        break;
      default:
        return;
    }
  }
  sequenceList.list.push(shapeType);
  value.forEach(element => (avg += element));
  avg /= (arguments.length - 1) / argumentsLength;
  console.log(Number(avg.toFixed(4)));
}

// 계산 함수
// // 원 계산 함수
function getCircleArea(radius, circlePi) {
  const valueArea = radius * radius * circlePi;
  return valueArea;
}
// // 평행사변형 계산 함수
function getParallelogramArea(width, height) {
  const valueArea = width * height;
  return valueArea;
}
// // 사다리꼴 계산 함수
function getTrapezoidArea(widthTop, widthBottom, height) {
  const valueArea = ((widthTop + widthBottom) * height) / 2;
  return valueArea;
}

// 에러 체크 함수
// // getArea() 에러 체크 함수
function errorCheck(inputValue) {
  const argumentsLength = getArgumentsLength(inputValue[0]);
  if (!argumentsLength) {
    errorMessage('올바른 도형을 입력해 주세요.');
    return;
  }

  if (inputValue.length < argumentsLength) {
    errorMessage('인자가 적게 입력되었습니다');
    return;
  } else if (inputValue.length > argumentsLength) {
    errorMessage('인자가 기준보다 많이 입력되었습니다');
    return;
  }

  return true;
}
// // getAreaAvg() 에러 체크 함수
function errorCheckAvg(inputValue) {
  let argumentsLength = getArgumentsLength(inputValue[0]);
  if (!argumentsLength) {
    errorMessage('올바른 도형을 입력해 주세요.');
    return;
  }
  if (inputValue[0] === 'circle') {
    argumentsLength--;
  }
  if ((inputValue.length - 1) % (argumentsLength - 1) !== 0) {
    errorMessage('인자의 개수가 맞지 않습니다.');
    return;
  }
  if (!numberCheck(inputValue)) {
    return;
  }
  return true;
}

// 숫자 체크 함수
function numberCheck(inputValue) {
  for (let i = 1; i < inputValue.length; i++) {
    if (inputValue[i] < 0 || inputValue[i] % 1 !== 0) {
      errorMessage('0이상의 정수 값을 입력해주세요');
      return;
    }
  }
  return true;
}

// 매개변수 개수 체크 함수
function getArgumentsLength(shapeType) {
  let argumentsLength;
  switch (shapeType) {
    case 'circle':
      argumentsLength = 3;
      break;
    case 'parallelogram':
      argumentsLength = 3;
      break;
    case 'trapezoid':
      argumentsLength = 4;
      break;
    default:
      return 0;
  }
  return argumentsLength;
}

// 프로그래밍 계산 순서 출력 클래스
class sequence {
  constructor() {
    this.list = [];
    this.outputMessage = '';
  }
  printExecutionSequence() {
    this.list.forEach((element, index) => {
      if (this.list.length - 1 === index) {
        this.outputMessage += element;
        return;
      }
      this.outputMessage += element + ' > ';
    });
    console.log('#계산수행순서 : ' + this.outputMessage);
  }
}

// 에러 메시지 출력 함수
function errorMessage(inputErrorMsg) {
  console.error(inputErrorMsg);
}

// 클래스 객체 생성
const sequenceList = new sequence();

// 테스트
getArea('circle', 6, 3.14);
getArea('parallelogram', 10, 15, 12);
getArea('parallelogram', 10, 20);
getArea('trapezoid', 12, 14, 8);
getArea('trapezoid', 10, 15);
getArea('abcde', 10, 15);
getAreaAvg('circle', 10, 14, 22);
getAreaAvg('circle', 18, 22, 40, 12);
getAreaAvg('parallelogram', 10, 12, 10, 22, 20);
getAreaAvg('parallelogram', 10, 12, 10, 22, 20, 30);
getAreaAvg('trapezoid', 5, 10, 2, 20, 10, 20);
getAreaAvg('trapezoid', 15, -10, 20, 20, 14, 20);
getAreaAvg('trapezoid', 5, 15, 10, 30, 20);
getAreaAvg('abcde', 5, 15, 10, 30, 20, 24);
sequenceList.printExecutionSequence();
