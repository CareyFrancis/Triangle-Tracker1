var trySide = function() {
  var side1 = document.getElementById('input1').value;
  var side2 = document.getElementById('input2').value;
  var side3 = document.getElementById('input3').value;

  var str1 = side1.toString();
  var str2 = side2.toString();
  var str3 = side3.toString();

  if (str1===str2 && str1===str3 && str2===str3) {
    alert("This is an Equilateral Triangle.");
  } else if (str1===str2 || str1===str3 || str2===str3) {
    alert ("This is an Isosceles Triangle.");
  } else if (str1!==str2 || str1!==str3 || str2!==str3) {
    alert ("This is a Scalene Trinagle.");
  } else (sum(str1 ,str2)=<str3 || sum(str1, str3)=< str2 || sum(str2, str3)=<str1){
    alert ("This is NOT a triangle");
  }
}
