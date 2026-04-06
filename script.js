let form = document.getElementById("formulario");

form.addEventListener('submit',function (e){

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let idade = document.getElementById('idade').value;
    let peso = document.getElementById('peso').value;
    let sangue = document.getElementById('sangue').value;
    let telefone = document.getElementById('telefone').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;

    document.getElementById('erroNome').textContent = '';
     document.getElementById('erroEmail').textContent = '';
      document.getElementById('erroIdade').textContent = '';
       document.getElementById('erroPeso').textContent = '';
        document.getElementById('erroSangue ').textContent = '';
         document.getElementById('erroTelefone').textContent = '';
          document.getElementById('erroCidade').textContent = '';
           document.getElementById('erroEstado').textContent = '';

           if(nome.split (" ").length < 2){
            return erro("Informe nome e sobrenome")
           }
            if (!email.includes('@')) {
                return erro("Email Invalido")
            }
            if(idade <16){
                return erro("Idade minima é 16 anos ")
            }
            if(peso < 50){
                return erro("Peso minimo é 50")
            }
            if(!nome || !email || !idade || !peso || !sangue || !telefone || !cidade || !estado){
                return erro ("Preencha todos os campos")
            }

            resultado.innerHTMl
})
