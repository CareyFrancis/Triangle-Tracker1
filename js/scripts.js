var trySide = function() {
    var side1 = document.getElementById('input1').value;
    var side2 = document.getElementById('input2').value;
    var side3 = document.getElementById('input3').value;

    var str1 = parseFloat(side1);
    var str2 = parseFloat(side2);
    var str3 = parseFloat(side3);

    if (str1 === str2 && str1 === str3 && str2 === str3) {
      alert("This is an Equilateral Triangle.");
    } else if (str1 === str2 || str1 === str3 || str2 === str3) {
      alert("This is an Isosceles Triangle.");
    } else if (str1 !== str2 || str1 !== str3 || str2 !== str3) {
      alert("This is a Scalene Trinagle.");
    } else {
      alert("This is NOT a triangle.");
    }
