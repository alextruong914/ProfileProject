const menuElement  = document.querySelector('.Menu--elenment');
const profileElement = document.querySelector('.profile')
var isClose = false;
menuElement.onclick = () => {
    isClose = !isClose;
    profileElement.classList.toggle('Menu--active',isClose);
}

// const menuPage = document.querySelector('.menu--page');
// const listPage = menuPage.querySelectorAll('a');
// console.log(listPage);
// // var isClick = false;
// listPage.onblur.style.color = "red";

// Validator Object
function Validator(options){

    // the function implements validate
    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value)  
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);

        if (errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    // Get element of Form
    var formElement = document.querySelector(options.form);
    if (formElement){
        
        options.rules.forEach(function (rule) {
            
            var inputElement = formElement.querySelector(rule.selector);
            
            if (inputElement) {
                // Handling the case of blur coming out of the input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Processed each time the user enters the input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }     
}

// Definition of Rules
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Please enter this field'
        }
    };
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : 'Please re-enter Email'
        }
    };
}

Validator.isPhone = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\d{10}$/;
            return regex.test(value) ? undefined : 'Please re-enter Phone number'
        }
    };
}


// var headingElement = document.querySelector('h2')
// var file1Element = document.querySelector('.intro__mainfile--m')
// var file2Element = document.querySelector('.intro__mainfile--m1')
// var file3Element = document.querySelector('.intro__mainfile--m2')

// var clickMajor = document.querySelector('.menu--2')
// clickMajor.onclick = () => {
//     headingElement.innerHTML = "My Major"
//     file1Element.innerHTML=`
//     Software Developer Job Description:
//     Learn about the key requirements, duties, responsibilities, and skills that should be in a Software Developer Job Description.`
//     file2Element.innerHTML=`
//     Back End Developer Job Description:
//     Learn about the key requirements, duties, responsibilities, and skills that should be in a Back end Developer Job Description.`
//     file3Element.innerHTML=`
//     Senior Software Engineer Job Description:
//     Learn about the key requirements, duties, responsibilities, and skills that should be in a Senior Software Engineer Job Description.`
//     file1Element.classList.add('style');
//     file2Element.classList.add('style');
//     file3Element.classList.add('style');
//     var contact = document.querySelector('.intro__contact')
//     contact.remove()
// }

// var clickContact = document.querySelector('.menu--4')
// clickContact.onclick = () => {
//     var introElement = document.querySelector('.intro')
//     introElement.remove()
//     var formDiv = document.createElement("div")
//     formDiv.appendChild()
//     introElement.appendChild(formDiv);
// }

