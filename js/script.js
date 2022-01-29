class Validator{

    constructor(){
        this.validations =[
            'data-min-length',
        ]
    }


// start validation of all fiels
Validate(form){

    //get the inputs
    let inputs = form.getElementsByTagName('input');
    
    //transform a HTMLCollection -> array
    let inputsArray = [...inputs];
    
    // loop in inputs validation by what is found
    inputsArray.forEach(function(input){
        
        //loop on all existing validation
        for(let i = 0; this.validations.length > i; i++){
            if(input.getAttribute(this.validations[i]) != null){
            
                //data-min-length > minlength ( clear the string for become a method )
                let method = this.validations[i].replace('data-', '').replace('-', '');

            }
        }
    }, this);
}

}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

// evento que dispara as validações
submit.addEventListener('click', function(e){
    
    e.preventDefault();
    console.log('funcionando')

});