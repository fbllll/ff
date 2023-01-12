const check = document.getElementById('showPass');
const inpt = document.getElementById('pass');

check.addEventListener('change', validaCheck, false);
function validaCheck(){
    var checked = check.checked;
    if(checked){
        inpt.removeAttribute('type', 'password');
        inpt.setAttribute('type', 'text');
    } else {
        inpt.removeAttribute('type', 'text');
        inpt.setAttribute('type', 'password');
        
    }
}