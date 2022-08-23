const miles = document.getElementById('miles');
const kilometres = document.getElementById('kilometres');
const yards = document.getElementById('yards');
const inches = document.getElementById('inches');
const instruction = document.getElementById('instruction');
const form = document.getElementById('form');
const convert= document.getElementById('convert');
const output = document.getElementById('output');

let convertType;


miles.addEventListener('click' , function(){
    convertType ='miles'
    instruction.innerHTML = 'Type in a number of miles'
}
)
kilometres.onclick = function (){
    convertType = 'kilometres'
    instruction.innerHTML = 'Type in a number of kilometres'
}
yards.onclick = function (){
    convertType = 'yards'
    instruction.innerHTML = 'Type in a number of yards'
}
inches.onclick = function (){
    convertType = 'inches'
    instruction.innerHTML = 'Type in a number of inches'
}


// form submit
form.onsubmit = function(event){
    event.preventDefault();
    const number = document.getElementById('number').value;

    if (number) {
        if (convertType == "miles") {
            var result = number * 1.60934;
          //  output.innerHTML = number + "miles" + "=" + result + "kilometres"   
          output.innerHTML = `${number} miles = ${ result} kilometres`
        }
        else if (convertType == "kilometres") {
            let result = number * 0.602;
            output.innerHTML =  `${number} kilometre = ${ result} miles`
        }
        else if (convertType == "yards") {
            let result = number * 36;
            output.innerHTML =  `${number} yard = ${ result} inches`  
        }
        else if (convertType == "inches") {
            let result = number * 0.027;
            output.innerHTML =  `${number} inches = ${ result} yards`
            
        }
    } else {
        output.innerHTML = 'Please Enter A Value!'
    }







}





















