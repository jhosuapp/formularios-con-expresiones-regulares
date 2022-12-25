const Form = function(){

    const regularExpressions = {
        user: /^[a-zA-ZÀ-ÿ\s\.-_@]{3,40}/,
        nameComplete: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
        phone: /^(\+)?[\d\s\-\.]{5,30}$/,
        email: /^[\w\d\.\-]+@+[\w\d]+\.+[\w\d\.]+$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
        message: /.{20,200}/
    }

    const stateInput = {
        user: false,
        nameComplete: false,
        phone: false,
        email: false,
        password: false,
        message: false,
    }

    const FormConfig = ()=>{
        const getFormId = document.getElementById('form');
        const getAllInputs = document.querySelectorAll('#form .input');
        const getInputPassword = document.querySelector('#password');
        const getTerms = document.querySelector('#terms');
        const getTermsContainer = document.querySelector('.form__block--terms');

        const FormValidation = (e)=>{

            const {user , nameComplete, phone, email, password, message} = regularExpressions;

            const ReUseValidation = (exps, className)=>{
                if(exps.test(e.target.value)){
                    document.querySelector(`.form__block--${className}`).classList.add('fine');
                    document.querySelector(`.form__block--${className}`).classList.remove('wrong');
                    stateInput[className] = true;
                }else{
                    document.querySelector(`.form__block--${className}`).classList.add('wrong');
                    document.querySelector(`.form__block--${className}`).classList.remove('fine');
                    stateInput[className] = false;
                }
            }

            switch (e.target.name){
                case 'user':
                    ReUseValidation(user, 'user');
                break;
                case 'nameComplete':
                    ReUseValidation(nameComplete, 'nameComplete');
                break;
                case 'phone':
                    ReUseValidation(phone, 'phone');
                break;
                case 'email':
                    ReUseValidation(email, 'email');
                break;
                case 'password':
                    ReUseValidation(password, 'password');
                break;
                case 'confirmPass':
                    // getInputPassword.value == e.target.value ? console.log('igual') : console.log('no es igual');
                    // console.log(e.target.value);
                break;
                case 'message':
                    ReUseValidation(message, 'message');
                break;
            }
        }
        //EJECUCION DE EVENTOS
        getAllInputs.forEach((data)=>{
            data.addEventListener('keyup', FormValidation);
            data.addEventListener('blur', FormValidation);
        });
        //EVENTO DE LOS TERMINOS
        getTerms.addEventListener('change', ()=>{
            if(getTerms.checked){
                getTermsContainer.classList.add('fine');
                getTermsContainer.classList.remove('wrong');
            }else{
                getTermsContainer.classList.add('wrong');
                getTermsContainer.classList.remove('fine');
            }
        })
        //ENVIO DE FORMULARIO
        getFormId.addEventListener('submit', (e)=>{

            const getAllCointaners = document.querySelectorAll('.form__block');
            const {user , nameComplete, phone, email, password, message} = stateInput;

            e.preventDefault();

            if(user && nameComplete && phone && email && password && message && getTerms.checked){
                console.log('bien');
            }else{
                console.log('mal');
            }

            getAllCointaners.forEach((data)=>{
                data.classList.contains('fine') ? data.classList.remove('wrong') : data.classList.add('wrong')
            });

        });
    }

    return {
        getChildsForm : function(){
            FormConfig();
        }
    }

}();

export const getChildsFunctionForm = ()=>{
    Form.getChildsForm();
}