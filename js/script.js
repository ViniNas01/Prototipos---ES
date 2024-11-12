document.addEventListener("DOMContentLoaded", function () {
    const botaoEquipe = document.getElementById("botaoEquipe");
    if (botaoEquipe) {
        botaoEquipe.addEventListener("click", equipe);
    }

    function equipe() {
        window.location.href = "../html/equipe.html"; // Certifique-se que o caminho
    }

});

// Funcões página medico
document.addEventListener("DOMContentLoaded", function () {
    const botaoMedico = document.getElementById("medico");
    if (botaoMedico) {
        botaoMedico.addEventListener("click", medico);
    }
    function medico() {
        window.location.href = "../html/medico/medico.html";

    }

    const botaoVoltar = document.getElementById("voltarEquipe");
    if (botaoVoltar) {
        botaoVoltar.addEventListener("click", voltarEquipe);
    }
    function voltarEquipe() {
        window.location.href = "../../html/equipe.html";
    }

    const botaoIncluir = document.getElementById("incluirMedico");
    if (botaoIncluir) {
        botaoIncluir.addEventListener("click", incluirMedico);
    }
    function incluirMedico() {
        window.location.href = "../../html/medico/medico.html";
    }

    const botaoExcluir = document.getElementById("excluirMedico");
    if (botaoExcluir) {
        botaoExcluir.addEventListener("click", excluirMedico);
    }
    function excluirMedico() {
        window.location.href = "../../html/medico/medicoExcluido.html";
    }

    const consultarMedico = document.getElementById("consultarMedico");
    if (consultarMedico) {
        consultarMedico.addEventListener("click", consultarMed);
    }
    function consultarMed() {
        window.location.href = "../../html/medico/medicoConsultar.html";
    }

    const voltarCadastrado = document.getElementById("voltarCadastrado");
    if (voltarCadastrado) {
        voltarCadastrado.addEventListener("click", voltarCad);
    }
    function voltarCad() {
        window.location.href = "../../html/medico/medicoCadastrado.html";
    }

    const alteraMedico = document.getElementById("alteraMedico");
    if (alteraMedico) {
        alteraMedico.addEventListener("click", altMedico);
    }

    function altMedico() {
        window.location.href = "../../html/medico/alterarMedico.html";
    }
    exibirCamposEdicao();
    
    function exibirCamposEdicao() {
        // Nome
        document.getElementById("nomeCad").style.display = "none";
        document.getElementById("inputNome").style.display = "block";
        document.getElementById("inputNome").value = localStorage.getItem("nome");

        // CPF
        document.getElementById("cpfCad").style.display = "none";
        document.getElementById("inputCpf").style.display = "block";
        document.getElementById("inputCpf").value = localStorage.getItem("cpf");

        // N° Matrícula
        document.getElementById("matriculaCad").style.display = "none";
        document.getElementById("inputMatricula").style.display = "block";
        document.getElementById("inputMatricula").value = localStorage.getItem("matricula");

        // Especialidade Médica
        document.getElementById("especialidadeCad").style.display = "none";
        document.getElementById("inputEspecialidade").style.display = "block";
        document.getElementById("inputEspecialidade").value = localStorage.getItem("especialidade");

        // Equipe
        document.getElementById("equipeCad").style.display = "none";
        document.getElementById("inputEquipe").style.display = "block";
        document.getElementById("inputEquipe").value = localStorage.getItem("equipe");

        // Data de Admissão
        document.getElementById("dataCad").style.display = "none";
        document.getElementById("inputDataAdmissao").style.display = "block";
        document.getElementById("inputDataAdmissao").value = localStorage.getItem("dataAdmissao");

        // Endereço
        document.getElementById("enderecoCad").style.display = "none";
        document.getElementById("inputEndereco").style.display = "block";
        document.getElementById("inputEndereco").value = localStorage.getItem("endereco");

        // Número
        document.getElementById("numeroCad").style.display = "none";
        document.getElementById("inputNumero").style.display = "block";
        document.getElementById("inputNumero").value = localStorage.getItem("numero");

        // Cidade
        document.getElementById("cidadeCad").style.display = "none";
        document.getElementById("inputCidade").style.display = "block";
        document.getElementById("inputCidade").value = localStorage.getItem("cidade");

        // Estado
        document.getElementById("estadoCad").style.display = "none";
        document.getElementById("inputEstado").style.display = "block";
        document.getElementById("inputEstado").value = localStorage.getItem("estado");

        // Data de Nascimento
        document.getElementById("dataNasCad").style.display = "none";
        document.getElementById("inputDataNascimento").style.display = "block";
        document.getElementById("inputDataNascimento").value = localStorage.getItem("dataNascimento");

        // Sexo
        document.getElementById("sexoCad").style.display = "none";
        document.getElementById("inputSexo").style.display = "block";
        document.getElementById("inputSexo").value = localStorage.getItem("sexo");

        // Portador Necessidades Especiais
        document.getElementById("portadorCad").style.display = "none";
        document.getElementById("inputPortador").style.display = "block";
        document.getElementById("inputPortador").value = localStorage.getItem("necessidades");
    }
    
    // const salvarAlteracoes = document.getElementById("savAlteracoes");
    // if (salvarAlteracoes) {
    //     salvarAlteracoes.addEventListener("click", salvAlt);
    // }

    // function salvAlt(){{
    //     window.location.href = "../../html/medico/novoCadastro.html";
    // }}
    // saveAlt(); 
    // function saveAlt(){
    //     // Nome
    //     const novoNome = document.getElementById("inputNome").value;
    //     localStorage.setItem("nome", novoNome);
    //     document.getElementById("nomeCad").textContent = novoNome;
    //     document.getElementById("nomeCad").style.display = "block";
    //     document.getElementById("inputNome").style.display = "none";
    
    //     // CPF
    //     const novoCpf = document.getElementById("inputCpf").value;
    //     localStorage.setItem("cpf", novoCpf);
    //     document.getElementById("cpfCad").textContent = novoCpf;
    //     document.getElementById("cpfCad").style.display = "block";
    //     document.getElementById("inputCpf").style.display = "none";
    
    //     // N° Matrícula
    //     const novaMatricula = document.getElementById("inputMatricula").value;
    //     localStorage.setItem("matricula", novaMatricula);
    //     document.getElementById("matriculaCad").textContent = novaMatricula;
    //     document.getElementById("matriculaCad").style.display = "block";
    //     document.getElementById("inputMatricula").style.display = "none";
    
    //     // Especialidade Médica
    //     const novaEspecialidade = document.getElementById("inputEspecialidade").value;
    //     localStorage.setItem("especialidade", novaEspecialidade);
    //     document.getElementById("especialidadeCad").textContent = novaEspecialidade;
    //     document.getElementById("especialidadeCad").style.display = "block";
    //     document.getElementById("inputEspecialidade").style.display = "none";
    
    //     // Equipe
    //     const novaEquipe = document.getElementById("inputEquipe").value;
    //     localStorage.setItem("equipe", novaEquipe);
    //     document.getElementById("equipeCad").textContent = novaEquipe;
    //     document.getElementById("equipeCad").style.display = "block";
    //     document.getElementById("inputEquipe").style.display = "none";
    
    //     // Data de Admissão
    //     const novaDataAdmissao = document.getElementById("inputDataAdmissao").value;
    //     localStorage.setItem("dataAdmissao", novaDataAdmissao);
    //     document.getElementById("dataCad").textContent = novaDataAdmissao;
    //     document.getElementById("dataCad").style.display = "block";
    //     document.getElementById("inputDataAdmissao").style.display = "none";
    
    //     // Endereço
    //     const novoEndereco = document.getElementById("inputEndereco").value;
    //     localStorage.setItem("endereco", novoEndereco);
    //     document.getElementById("enderecoCad").textContent = novoEndereco;
    //     document.getElementById("enderecoCad").style.display = "block";
    //     document.getElementById("inputEndereco").style.display = "none";
    
    //     // Número
    //     const novoNumero = document.getElementById("inputNumero").value;
    //     localStorage.setItem("numero", novoNumero);
    //     document.getElementById("numeroCad").textContent = novoNumero;
    //     document.getElementById("numeroCad").style.display = "block";
    //     document.getElementById("inputNumero").style.display = "none";
    
    //     // Cidade
    //     const novaCidade = document.getElementById("inputCidade").value;
    //     localStorage.setItem("cidade", novaCidade);
    //     document.getElementById("cidadeCad").textContent = novaCidade;
    //     document.getElementById("cidadeCad").style.display = "block";
    //     document.getElementById("inputCidade").style.display = "none";
    
    //     // Estado
    //     const novoEstado = document.getElementById("inputEstado").value;
    //     localStorage.setItem("estado", novoEstado);
    //     document.getElementById("estadoCad").textContent = novoEstado;
    //     document.getElementById("estadoCad").style.display = "block";
    //     document.getElementById("inputEstado").style.display = "none";
    
    //     // Data de Nascimento
    //     const novaDataNascimento = document.getElementById("inputDataNascimento").value;
    //     localStorage.setItem("dataNascimento", novaDataNascimento);
    //     document.getElementById("dataNasCad").textContent = novaDataNascimento;
    //     document.getElementById("dataNasCad").style.display = "block";
    //     document.getElementById("inputDataNascimento").style.display = "none";
    
    //     // Sexo
    //     const novoSexo = document.getElementById("inputSexo").value;
    //     localStorage.setItem("sexo", novoSexo);
    //     document.getElementById("sexoCad").textContent = novoSexo;
    //     document.getElementById("sexoCad").style.display = "block";
    //     document.getElementById("inputSexo").style.display = "none";
    
    //     // Portador Necessidades Especiais
    //     const novoPortador = document.getElementById("inputPortador").value;
    //     localStorage.setItem("necessidades", novoPortador);
    //     document.getElementById("portadorCad").textContent = novoPortador;
    //     document.getElementById("portadorCad").style.display = "block";
    //     document.getElementById("inputPortador").style.display = "none";

    // }
    
})













// Pagina de Cadastro do médico
document.addEventListener("DOMContentLoaded", function () {
    const btngravarMedico = document.getElementById("gravarMedico");
    if (btngravarMedico) {
        btngravarMedico.addEventListener("click", gravarMedico);
    };

    function gravarMedico() {
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
        window.location.href = "../../html/medico/medicoCadastrado.html";
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






function medicoAlterado(){
    const alertaDiv = document.getElementById("alteracao");
    alertaDiv.style.display = "block";

    setTimeout(() => {
        alertaDiv.style.display = "none";
    }, 3000);
}

function medicoExcluido() {
    const alertaDiv = document.getElementById("exclusao");
    alertaDiv.style.display = "block";

    setTimeout(() => {
        alertaDiv.style.display = "none";
    }, 3000);
}

function alertaTexto() {
    const alertaDiv = document.getElementById("alerta");
    alertaDiv.style.display = "block";

    setTimeout(() => {
        alertaDiv.style.display = "none";
    }, 3000);
}
