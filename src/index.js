module.exports = function solveEquation(equation) {

  var str = equation;
  var a_temp = str.split(' * x^')[0];
  var str1 = str.split('^2 ')[1];
  var b_temp = str1.split(' * x')[0];
  var c_temp = str1.split('x ')[1];

  b_temp = b_temp.replace( / /g, "" );
  c_temp = c_temp.replace( / /g, "" );

  var a = parseInt(a_temp, 10); 
  var b = parseInt(b_temp, 10);
  var c = parseInt(c_temp, 10);

  var D = b * b - 4 * a * c;
  
  var x_1 = Math.round(( - b + Math.sqrt(D)) / (2 * a));
  var x_2 = Math.round(( - b - Math.sqrt(D)) / (2 * a));

  function compareNumbers(a, b) {
    return a - b;
  }

  return [x_1, x_2].sort(compareNumbers);
}
