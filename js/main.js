// Detectar idioma
function obterIdiomaNavegador(){
    return navigator.language || navigator.userLanguage;
}

function ConteudoPorIdioma(){
    var codigoIdioma = obterIdiomaNavegador();

    if (codigoIdioma.startsWith('pt')){
        console.log('A carregar conteúdo em Português...');
    }
    else{
        console.log('Loading content in English...');
    }

}

ConteudoPorIdioma();


// Enviar email
function SendMail(event){
    event.preventDefault();

    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_u1ap0ne", "template_epusk69", params).then(function (res){
        alert("Message sent successfully!");
    });
}