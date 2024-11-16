document.addEventListener("DOMContentLoaded", function () {
    const botaoEquipe = document.getElementById("botaoEquipe");
    if (botaoEquipe) {
        botaoEquipe.addEventListener("click", equipe);
    }

    function equipe() {
        window.location.href = "../html/equipe.html";
    }

    const botaoAgendamento = document.querySelector("#botaoAgendamento");
    if (botaoAgendamento){
        botaoAgendamento.addEventListener("click", paciente);
    }
    function paciente(){
        window.location.href = "../html/agendamento.html";
    }
});




//Validar cpf  usuario
const cpfs_Cadastrados = ["98765432100"];
function TestaCPF(strCPF) {//Função para validar CPF
    strCPF = strCPF.replace(/[.-]/g, ""); // Remove "." e "-"
    if (strCPF.length !== 11 || strCPF === "00000000000") return false;

    var Soma = 0;
    var Resto;

    // Primeiro dígito verificador
    for (var i = 1; i <= 9; i++) {
        Soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;
    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

    // Segundo dígito verificador
    Soma = 0;
    for (var i = 1; i <= 10; i++) {
        Soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;
    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11))) return false;

    return true;
}
document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector('#cpf');
    const validarBtn = document.querySelector('#login');

    // Adiciona máscara ao CPF enquanto o usuário digita
    input.addEventListener('input', () => {
        let valor = input.value.replace(/\D/g, ''); // Remove tudo que não é número
        if (valor.length > 3) valor = valor.slice(0, 3) + '.' + valor.slice(3);
        if (valor.length > 7) valor = valor.slice(0, 7) + '.' + valor.slice(7);
        if (valor.length > 11) valor = valor.slice(0, 11) + '-' + valor.slice(11);
        input.value = valor;
    });

    // Validação e redirecionamento
    validarBtn.addEventListener('click', () => {
        const cpf = input.value;
        const cpfSemMascara = cpf.replace(/[.-]/g, ""); // Remove máscara para validação

        if (!TestaCPF(cpf)) {
            alert("CPF inválido! Por favor, insira um CPF válido.");
            return;
        }

        if (cpfs_Cadastrados.includes(cpfSemMascara)) {
            // Redireciona para a página de agendamento
            window.location.href = "../html/index.html";
        } else {
            // Redireciona para a página de cadastro
            alert("Usuário não cadastrado");
        }
    });
});



// Validação de CPF paciente
const cpfsCadastrados = ["12345678909"];
function TestaCPF(strCPF) {//Função para validar CPF
    strCPF = strCPF.replace(/[.-]/g, ""); // Remove "." e "-"
    if (strCPF.length !== 11 || strCPF === "00000000000") return false;

    var Soma = 0;
    var Resto;

    // Primeiro dígito verificador
    for (var i = 1; i <= 9; i++) {
        Soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;
    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

    // Segundo dígito verificador
    Soma = 0;
    for (var i = 1; i <= 10; i++) {
        Soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;
    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11))) return false;

    return true;
}
// Mascara do cpf
document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector('#cpf');
    const validarBtn = document.querySelector('#validar');

    // Adiciona máscara ao CPF enquanto o usuário digita
    input.addEventListener('input', () => {
        let valor = input.value.replace(/\D/g, ''); // Remove tudo que não é número
        if (valor.length > 3) valor = valor.slice(0, 3) + '.' + valor.slice(3);
        if (valor.length > 7) valor = valor.slice(0, 7) + '.' + valor.slice(7);
        if (valor.length > 11) valor = valor.slice(0, 11) + '-' + valor.slice(11);
        input.value = valor;
    });

    // Validação e redirecionamento
    validarBtn.addEventListener('click', () => {
        const cpf = input.value;
        const cpfSemMascara = cpf.replace(/[.-]/g, ""); // Remove máscara para validação

        if (!TestaCPF(cpf)) {
            alert("CPF inválido! Por favor, insira um CPF válido.");
            return;
        }

        if (cpfsCadastrados.includes(cpfSemMascara)) {
            // Redireciona para a página de agendamento
            alert("CPF cadastrado! Redirecionando para a página de agendamento...");
            window.location.href = "../html/paciente/pacienteCadastrado.html";
        } else {
            // Redireciona para a página de cadastro
            window.location.href = "../html/paciente/pacienteCadBasico.html";
        }
    });
});



//Pagina Agendamento
document.addEventListener("DOMContentLoaded", () => {
    const voltarAgendamento = document.querySelector("#voltarAgendamento");
    if (voltarAgendamento){
        voltarAgendamento.addEventListener("click", voltarAgen);
    }
    function voltarAgen(){
        window.location.href = "../../html/agendamento.html";
    }

    const agendar = document.querySelector("#gravarAgendamento");
    if(agendar){
        agendar.addEventListener("click", agendado);
    }
    function agendado(){
        window.location.href = "../../html/paciente/pacienteAgendado.html";
    }

    const voltaPacienteCad = document.querySelector("#voltarPacienteCad");
    if (voltaPacienteCad) {
    voltaPacienteCad.addEventListener("click", voltarPaciente);
    }
    function voltarPaciente() {
        window.location.href = "../../html/paciente/pacienteCadastrado.html";
    }

    const alterarPaciente = document.querySelector("#alterarPaciente");
    if (alterarPaciente) {
    alterarPaciente.addEventListener("click", pacienteAlt);
    }
    function pacienteAlt() {
        window.location.href = "../../html/paciente/pacienteAlterado.html";
    }

    const desmarcarPaciente = document.querySelector("#desmarcarPaciente");
    if (desmarcarPaciente) {
        desmarcarPaciente.addEventListener("click", pacienteDesmarcado);
    }
    function pacienteDesmarcado(){
        window.location.href = "../../html/paciente/pacienteDesmarcado.html";
    }

})




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

    const botaoAvancar = document.getElementById("avancar");
    if (botaoAvancar) {
        botaoAvancar.addEventListener("click", avancarMedico);
    }
    function avancarMedico() {
        window.location.href = "../../html/medico/especialidade.html";
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
    }

    const salvarAlteracoes = document.getElementById("savAlteracoes");
    if (salvarAlteracoes) {
        salvarAlteracoes.addEventListener("click", salvAlt);
    }

    function salvAlt(){{
        window.location.href = "../../html/medico/novoCadastro.html";
    }}
    saveAlt(); 
    function saveAlt(){
    }

})

// Pagina de Cadastro do médico
document.addEventListener("DOMContentLoaded", function () {
    const btngravarMedico = document.getElementById("gravarMedico");
    if (btngravarMedico) {
        btngravarMedico.addEventListener("click", gravarMedico);
    };

    function gravarMedico() {
        window.location.href = "../../html/medico/medicoCadastrado.html";
    }
})

function medicoAlterado() {
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

function pacienteAgendado(){
    const alertaDiv = document.getElementById("agendado");
    alertaDiv.style.display = "block";

    setTimeout(() => {
        alertaDiv.style.display = "none";
    }, 3000);
}

function pacienteAlterado(){
    const alertaDiv = document.getElementById("alterado");
    alertaDiv.style.display = "block";

    setTimeout(() => {
        alertaDiv.style.display = "none";
    }, 3000);
}