// let accordionButton = document.getElementsByClassName('answer__tittle-icon');

let buttons = document.getElementsByClassName('answer__tittle-icon');
let contents = document.getElementsByClassName('answer__content');


for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function (){
        
        buttons[i].classList.toggle('active-accordion')

        for (let i = 0; i < contents.length; i++){

            if(buttons[i].classList.contains('active-accordion')){
                contents[i].classList.add('active');
            }
            else{
                contents[i].classList.remove('active');
            }
    
        }
    })
}






