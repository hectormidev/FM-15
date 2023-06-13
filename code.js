const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
let errorText = document.querySelector('.error-message')
let errorSign = document.querySelector('.error-icon')

btn.addEventListener('click', () =>{
    validate(input.value)
})

const validate = email =>{
    let error;
    if(email.includes('@') && email.includes('.'))  error = false
        else error = true

    if(error){
        errorText.classList.remove('invisible')
        errorSign.classList.remove('invisible')
    } else{
        errorText.classList.add('invisible')
        errorSign.classList.add('invisible')
    }
}