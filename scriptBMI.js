function bmicalculate(){
  var a,b,bmi;
  a= (document.getElementById('weight-input').value);
  b= (document.getElementById('height-input').value);
  bmi= (((parseInt(a)/(parseInt(b)*parseInt(b))*10000)));
  
  document.getElementById('result').value = bmi.toFixed(1);
}

function classify(){
  var x=(document.getElementById('result').value)

  if (x < 18.5){document.getElementById('YourClass').innerText = ("(Less than 18.5) You are Underweight, try to eat more nutritious foods that are high in calories!");}
  else if (x >= 18.5 && x <= 24.9){document.getElementById('YourClass').innerText = ("(18.5 - 24.9) You have a normal body weight, keep it up!");}
  else if (x >= 25 && x <= 29.9){document.getElementById('YourClass').innerText = ("(25.0 - 29.9) You are Overweight! Try getting a gym membership and eat less fatty foods!");}
  else if (x > 29.9){document.getElementById('YourClass').innerText = ("(More than 30.0) You are Obese! Try applying to a weight loss program, go for short walks, and eat a more balanced diet!");}
}

function showImage() {
  var x=(document.getElementById('result').value)

  if (x < 18.5) {
    document.getElementById('too-thin').style.display = 'inline';
    document.getElementById('normal').style.display = 'none';
    document.getElementById('overweight').style.display = 'none';
    document.getElementById('obese').style.display = 'none';  
  } else if (x >= 18.5 && x <= 24.9) {
    document.getElementById('too-thin').style.display = 'none';
    document.getElementById('normal').style.display = 'inline';
    document.getElementById('overweight').style.display = 'none';
    document.getElementById('obese').style.display = 'none';  
  } else if (x >= 25 && x <= 29.9) {
    document.getElementById('too-thin').style.display = 'none';
    document.getElementById('normal').style.display = 'none';
    document.getElementById('overweight').style.display = 'inline';
    document.getElementById('obese').style.display = 'none';  
  } else if (x > 29.9) {
    document.getElementById('too-thin').style.display = 'none';
    document.getElementById('normal').style.display = 'none';
    document.getElementById('overweight').style.display = 'none';
    document.getElementById('obese').style.display = 'inline';  
}}

function clearinput(){
  document.getElementById('weight-input').value = '';
  document.getElementById('age-input').value = '';
  document.getElementById('height-input').value = '';
  document.getElementById('result').value = '';
  document.getElementById('YourClass').innerText = '';
  document.getElementById('too-thin').style.display = 'none';
  document.getElementById('normal').style.display = 'none';
  document.getElementById('overweight').style.display = 'none';
  document.getElementById('obese').style.display = 'none'; 
}



