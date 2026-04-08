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

            switch (sangue){
        
        case "A+" :
        
        alert("Você poderá doar sangue para os tipos: A+ e AB+"); 
        alert("E você podera receber Sangue do tipos: A+, A-, O+, O-");
        break;

        case "A-" :
        
        alert("Você poderá doar sangue para os tipos: A+, A-, AB+, AB-"); 
        alert("E você podera receber Sangue do tipos: A-, O-");
        break;


        case "B+" :

        alert("Você poderá doar sangue para os tipos: B+, AB+"); 
        alert("E você podera receber Sangue do tipos: B+, B-, O+, O-");
        break;

        case "B-" :

        alert("Você poderá doar sangue para os tipos: B+, B-, AB+, AB-"); 
        alert("E você podera receber Sangue do tipos: B-, O-");
        break;

        case "AB+" :

        alert("Você poderá doar sangue para os tipos: AB+"); 
        alert("E você podera receber Sangue do tipos: A+, A-, B+, B-, AB+, AB-, O+, O-");

        break;

        case "AB-" :

        alert("Você poderá doar sangue para os tipos: AB+, AB-"); 
        alert("E você podera receber Sangue do tipos: A-, B-, AB-, O-");
        break;

        case "O+" :

        alert("Você poderá doar sangue para os tipos: A+, B+, AB+, O+"); 
        alert("E você podera receber Sangue do tipos: O+, O-");
        break;


        case "O-" :

        alert("Você poderá doar sangue para os tipos: A+, A-, B+, B-, AB+, AB-, O+, O-"); 
        alert("E você podera receber Sangue do tipos: O-");
        break;

        default:

        alert("Tipo de Sangue Inválido");

    }

        let resultado= document.getElementById('resultado');
        resultado.innerHTML=`
        Dados enviados: <br>
       nome: ${nome} <br> 
       email: ${email} <br> 
       idade: ${idade} <br> 
       peso: ${peso} <br> 
    sangue: ${sangue} <br> 
    telefone: ${telefone} <br> 
    cidade: ${ciadade} <br> 
    estado: ${estado} <br> 
       `;
    form.reset();
    
        }
   
    
)
