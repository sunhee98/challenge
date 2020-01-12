function gugudan(start, end) {
  for (var i = start; i <= end; i++) {
    console.log(i + '단');
    for (var j = 1; j <= 9; j++) {
      console.log(i + ' * ' + j + ' = ' + i * j);
    }
    console.log(' ');
  }
}
gugudan(3, 6);
