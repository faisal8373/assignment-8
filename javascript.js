var temp = prompt('Please enter temperature in celcius:')
if (temp){
var forn = 9/5 * temp + 32
alert('Temperatur in foren is: ' + forn)
}
if(height){
    var height = prompt('Please enter height in inches: ')
    var cm = height * 2.54
    alert('Height in centimeter is: ' + cm)
    }
    
var eng = prompt('Please enter marks in English: ')
var math = prompt('Please enter marks in math: ')
var computer = prompt('Please enter marks in computer: ')
if(eng & math & computer){
var avg = (eng + math + computer)/3
if (avg >= 80) {
    alert("you are above standard, Admission Granted!")
}
}