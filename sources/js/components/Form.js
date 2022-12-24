const Form = function(){

    const FormConfig = ()=>{
        alert('hola');
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