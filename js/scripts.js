var trySide = function() {
    var side1 = document.getElementById('input1').value;
    var side2 = document.getElementById('input2').value;
    var side3 = document.getElementById('input3').value;

    var str1 = parseFloat(side1);
    var str2 = parseFloat(side2);
    var str3 = parseFloat(side3);

    if (str1 === str2 && str1 === str3 && str2 === str3) {
      alert("This is an Equilateral Triangle.");
    } else if (str1 + str2 < str3 || str1 + str3 < str2 || str2 + str3 < str1){
      alert("This is NOT a triangle!");
    } else if (str1 === str2 || str1!== str3 || str2 !== str3) {
      alert("This is an Isosceles Triangle.");
    } else if (str1 !== str2 || str1 !== str3 || str2 !== str3) {
      alert("This is a Scalene Trinagle.");
    } else {
      alert("INVALID OPERATION!")
    }
};
/*function answer(){
var checker=[];
checker.push(parseFloat(prompt("Enter side A: ")));
 if (isNaN(checker[0])=== true){
   alert("Please enter a number in the field");
 }else{
 checker.push(parseFloat(prompt("Enter side B: ")));
   if (isNaN(checker[1])=== true){
       alert("Please enter a number in the field");
     }else{
     checker.push(parseFloat(prompt("Enter side C: ")));
       if (isNaN(checker[2])=== true){
           alert("Please enter a number in the field");
       }else{
       if((checker[0]+checker[1])<=checker[2] || (checker[1]+checker[2])<=checker[0] || (checker[0]+checker[2])<=checker[1]){
           alert("Your shape is Not a Triangle");
       }
       else if(checker[0]===checker[1] && checker[0]===checker[2] && checker[1]===checker[2]){
           alert("Your shape is Equilateral");
       }
       else if(checker[0]===checker[1] || checker[1]===checker[2] || checker[0]===checker[2]){
           alert("Your shape is Isosceles");
       }
       else if((checker[0]+checker[1])>=checker[2] || (checker[1]+checker[2])>=checker[0] || (checker[0]+checker[2])>=checker[1]){
           alert("Your shape is Scalene");
       }
       else{
           alert("Value entered must be a number");
       }
     }
   }
 }
};
*/
