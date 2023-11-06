function bmicalculate(){
  var a,b,bmi;
  a= (document.getElementById('weight-input').value);
  b= (document.getElementById('height-input').value);
  bmi= (((parseInt(a)/(parseInt(b)*parseInt(b))*10000)));
  
  document.getElementById('result').value = bmi.toFixed(1);
}

function classify(){
  var x=(document.getElementById('result').value)
  
  if (x < 18.5){document.getElementById('YourClass').innerText = ("You are Underweight, try to eat more nutritious foods that are high in calories!");}
  else if (x >= 18.5 && x <= 24.9 ){document.getElementById('YourClass').innerText = ("You have a normal body weight, keep it up!");}
  else if (x >= 25 && x <= 29.9){document.getElementById('YourClass').innerText = ("You are Overweight! Try getting a gym membership and eat less fatty foods!");}
  else if (x > 29.9){document.getElementById('YourClass').innerText = ("You are Obese! Try applying to a weight loss program, go for short walks, and eat a more balanced diet!");}
}


function clearinput(){
  document.getElementById('weight-input').value = '';
  document.getElementById('age-input').value = '';
  document.getElementById('height-input').value = '';
  document.getElementById('result').value = '';
  document.getElementById('YourClass').innerText = '';
}

