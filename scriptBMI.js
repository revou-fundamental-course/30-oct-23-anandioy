alert ("Hello");

function bmicalculate(){
  var a,b,bmi;
  a= (document.getElementById('weight-input').value);
  b= (document.getElementById('height-input').value);
  bmi= (((parseInt(a)/(parseInt(b)*parseInt(b))*10000)));
  
  document.getElementById('result').value = bmi
}