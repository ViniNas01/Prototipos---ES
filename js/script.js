document.addEventListener("DOMContentLoaded", function() {
    const botaoEquipe = document.getElementById("botaoEquipe");
    if (botaoEquipe) {
        botaoEquipe.addEventListener("click", equipe);
    }

    function equipe() {
        window.location.href = "../html/equipe.html"; // Certifique-se que o caminho
    }

});

// Funcões página medico
document.addEventListener("DOMContentLoaded", function() {
    const botaoMedico = document.getElementById("medico");
    if (botaoMedico){
        botaoMedico.addEventListener("click", medico);
    }

    function medico(){
        window.location.href = "../html/medico/medico.html";

    }

    const botaoVoltar = document.getElementById("voltarEquipe");
    if(botaoVoltar){
        botaoVoltar.addEventListener("click", voltarEquipe);
    }

    function voltarEquipe(){
        window.location.href = "../../html/equipe.html";
    }

    const botaoIncluir = document.getElementById("incluirMedico");
    if (botaoIncluir){
        botaoIncluir.addEventListener("click", incluirMedico);
    }

    function incluirMedico(){
        window.location.href = "../../html/medico/medico.html";
    }

    const botaoExcluir = document.getElementById("excluirMedico");
    if(botaoExcluir){
        botaoExcluir.addEventListener("click", excluirMedico);
    }

    function excluirMedico(){
        window.location.href = "../../html/medico/medicoExcluido.html";
    }

})

// Pagina de Cadastro do médico
document.addEventListener("DOMContentLoaded", function(){
    const btngravarMedico = document.getElementById("gravarMedico");
    if (btngravarMedico){
        btngravarMedico.addEventListener("click", gravarMedico );
    };

    function gravarMedico(){
        let nome = document.getElementById("nome").value;
        localStorage.setItem("nome", nome);
        let dataNascimento = document.getElementById("dataNascimento").value;
        localStorage.setItem("dataNascimento", dataNascimento);
        //cpf
        localStorage.setItem("cpf", document.getElementById("cpf").value);
        //endereço
        localStorage.setItem("endereco", document.getElementById("endereco").value);
        // numero
        localStorage.setItem("numero", document.getElementById("numero").value);
        //cidade
        localStorage.setItem("cidade", document.getElementById("cidade").value);
        //Estado
        localStorage.setItem("estado", document.getElementById("estado").value);
        //sexo
        const sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
        if (sexoSelecionado) {
            localStorage.setItem("sexo", sexoSelecionado.value);
        }
        //portador
        const opcSelecionado = document.querySelector('input[name="necessidades"]:checked');
        if (opcSelecionado) {
            localStorage.setItem("necessidades", opcSelecionado.value);
        }
        //especialidade
        localStorage.setItem("especialidade", document.getElementById("especialidade").value);
        //data de admissão
        localStorage.setItem("dataAdmissao", document.getElementById("dataAdmissao").value);
        //equipe
        localStorage.setItem("equipe", document.getElementById("equipe").value);
        window.location.href =  "../../html/medico/medicoCadastrado.html";       
    }
    // numero matricula
    let numeroMatricula = Math.floor(Math.random() * 100) + 1;
    document.getElementById("matriculaCad").innerHTML = numeroMatricula;
    //nome
    var nome = localStorage.getItem("nome");
    document.getElementById("nomeCad").textContent = nome;
    //data de nascimento
    let dataNascimento = localStorage.getItem("dataNascimento");
    document.getElementById("dataNasCad").textContent = dataNascimento;
    //cpf
    document.getElementById("cpfCad").textContent = localStorage.getItem("cpf");
    //endereço
    document.getElementById("enderecoCad").textContent = localStorage.getItem("endereco");
    //numero
    document.getElementById("numeroCad").textContent = localStorage.getItem("numero");
    //cidade
    document.getElementById("cidadeCad").textContent = localStorage.getItem("cidade");
    //estado
    document.getElementById("estadoCad").textContent = localStorage.getItem("estado");
    //sexo     
    document.getElementById("sexoCad").textContent = localStorage.getItem("sexo");
    //portador
    document.getElementById("portadorCad").textContent = localStorage.getItem("necessidades");
    //especialidade
    document.getElementById("especialidadeCad").textContent = localStorage.getItem("especialidade");
    //data de admissão
    document.getElementById("dataCad").textContent = localStorage.getItem("dataAdmissao");
    //equipe
    document.getElementById("equipeCad").textContent = localStorage.getItem("equipe"); 
})


function medicoExcluido(){
    const alertaDiv = document.getElementById("exclusao");
    alertaDiv.style.display = "block";

    setTimeout(() => {
        alertaDiv.style.display = "none";
    }, 3000);
}

function alertaTexto(){
    const alertaDiv = document.getElementById("alerta");
    alertaDiv.style.display = "block";

    setTimeout(() => {
        alertaDiv.style.display = "none";
    }, 3000);
}

