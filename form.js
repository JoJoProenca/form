function valida(){
    if(document.getElementById('username').value =''){
        alert('Insira seu nome ?');
        document.getElementById('username').focus();
        return false;
    }
    if(document.getElementById('username').value!= '@ ! # % <> ?/:', '[1-9]'){

   
    document.getElementById('username').focus()
    return false;
}
    else
    return true;
}

function valida(){
    if(document.getElementById('email').value ==''){
        alert('Opa! você esqueceu seu email');
        document.getElementById('email').focus();
        return false;
    }
    else
       return true;
}
function valida(){
    if(document.getElementById('password').value =!''){
        alert('Opa! você esqueceu de inserir a sua senha');
        document.getElementById('password').focus();
        return false;
    }
    if(document.getElementById('password').value.length<8){
        alert('A senha precisa ter mais de 8 caracteres');
        document.getElementById('password').focus();
        return false;
    }
   
    return true;
}