let name= window.document.querySelector('#name')
let email= window.document.querySelector('#email')
let assunto=window.document.querySelector('#assunto')
let descricao=window.document.querySelector('#descricao')

let nameOk= false;
let emailOk= false;
let assuntoOk= false;
let descricaoOk= false;


name.style.width='100%'
email.style.width='100%'

function validarNome(){
    let txt = document.querySelector('#txtName');

    if(name.value.length < 3 || name.value.length == 0){
        if(name.value.length == 0){
            txtName.innerHTML = 'Campo obrigatório.';
            txtName.style.color = 'black';
            txtName.style.display = 'block';
        }else{
            txt.innerHTML='Nome inválido! Mínimo de 3 caracteres necessários';
            txt.style.color = 'red';
        }        
    } else{
        txt.innerHTML='Nome válido!';
        txt.style.color = 'green';
        nameOk=true;
    }
}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail');
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value.match(regexEmail)|| email.value.length == 0){
        if(email.value.length == 0){
            txtEmail.innerHTML = 'Campo obrigatório.';
            txtEmail.style.color = 'black';
            txtEmail.style.display = 'block';
        }else{
            txtEmail.style.color = 'green';
            txtEmail.innerHTML='Email válido!';
            emailOk=true;
        }
    }else{
        txtEmail.innerHTML='Email inválido!';
        txtEmail.style.color='red'
    }
}

function validarAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto');

    if(assunto.value.length > 50 || assunto.value.length == 0){
        if(assunto.value.length == 0){
            txtAssunto.innerHTML = 'Campo obrigatório.';
            txtAssunto.style.color = 'black';
            txtAssunto.style.display = 'block';
        } else{
            txtAssunto.innerHTML = 'Inválido! O assunto precisa ter de 1-50 caracteres.';
            txtAssunto.style.color = 'red';
            txtAssunto.style.display = 'block';
        }
        
    } else{
        txtAssunto.innerHTML = 'Campo válido.';
        txtEmail.style.color='black';
        assuntoOk=true;
    }
}

function validarDescricao(){
    let txtDescricao = document.querySelector('#txtDescricao');

    if(descricao.value.length > 200 || descricao.value.length == 0){
        if(descricao.value.length == 0){
            txtDescricao.innerHTML = 'Campo obrigatório.';
            txtDescricao.style.color = 'black';
            txtDescricao.style.display = 'block';
        } else{txtDescricao.innerHTML = 'Inválido! O texto precisa ter de 1-200 caracteres.';
        txtDescricao.style.color = 'red';
        txtDescricao.style.display = 'block';
        }        
    } else{
        txtDescricao.style.display = 'none';
        descricaoOk=true;
    }
}

function enviar(){
    if(nameOk==true && emailOk==true && assuntoOk==true && descricaoOk==true){
        alert("Requisição enviada com sucesso!");
     } else{
            alert("Requisição não enviada! Preencha os campos do formulário corretamente.");
      }
}