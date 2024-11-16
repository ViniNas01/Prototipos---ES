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
    const botaoProntuario = document.querySelector("#botaoProntuario");
    if(botaoProntuario){
        botaoProntuario.addEventListener("click", prontuario);
    }
    function prontuario(){
        window.location.href = "../html/prontuario/prontuario.html";
    }
    const botaoIndex = document.querySelector("#voltarIndex");
    if (botaoIndex) {
        botaoIndex.addEventListener("click", voltarIndex);
    }
    function voltarIndex(){
        window.location.href = "../../html/index.html";
    }
    const salvarDados = document.querySelector("#salvarDados");
    if (salvarDados) {
        salvarDados.addEventListener("click", dadosProntuario);
    }
    function dadosProntuario(){
        window.location.href = "../../html/prontuario/prontuarioCadastrado.html";
    }
    const voltarProntuario = document.querySelector("#voltarProntuario");
    if (voltarProntuario) {
        voltarProntuario.addEventListener("click", pagProntuario);
    }
    function pagProntuario(){
        window.location.href = "../../html/prontuario/prontuario.html";
    }
    const alterarProntuario = document.querySelector("#alterarProntuario");
    if (alterarProntuario) {
        alterarProntuario.addEventListener("click", altProntuario);
    }
    function altProntuario(){
        window.location.href = "../../html/prontuario/prontuarioAlterado.html";
    }
    const prontuarioAlterado = document.querySelector("#salvarProntuario");
    if (prontuarioAlterado) {
        prontuarioAlterado.addEventListener("click", prontuarioAlt);
    }
    function prontuarioAlt(){
        window.location.href = "../../html/prontuario/novoProntuario.html";
    }
    const consultarProntuario = document.querySelector("#consultarProntuario");
    if (consultarProntuario) {
        consultarProntuario.addEventListener("click", consultarPront);
    }
    function consultarPront(){
        window.location.href = "../../html/prontuario/consultarProntuario.html";
    }
    const voltarConsulta = document.querySelector("#voltarConsulta");
    if (voltarConsulta) {
        voltarConsulta.addEventListener("click", consultarVoltar);
    }
    function consultarVoltar(){
        window.location.href = "../../html/prontuario/prontuarioCadastrado.html";
    }
    const excluirProntuario = document.querySelector("#excluirProntuario");
    if (excluirProntuario) {
        excluirProntuario.addEventListener("click", excluirPront);
    }
    function excluirPront(){
        window.location.href = "../../html/prontuario/excluirProntuario.html";
    }
    const incluirProntuario = document.querySelector("#incluirProntuario");
    if (incluirProntuario) {
        incluirProntuario.addEventListener("click", incluPront);
    }
    function incluPront(){
        window.location.href = "../../html/prontuario/prontuario.html";
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
            alert("CPF não encontrado! Redirecionando para a página de cadastro Básico...");
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
    const voltarCadas = document.getElementById("voltarCad");
    if (voltarCadas) {
        voltarCadas.addEventListener("click", voltarCadastroMed);
    }
    function voltarCadastroMed() {
        window.location.href = "../../html/medico/medico.html";
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
function alteracao() {
    const alertaDiv = document.getElementById("alteracao");
    alertaDiv.style.display = "block";

    setTimeout(() => {
        alertaDiv.style.display = "none";
    }, 3000);
}
function exclusao() {
    const alertaDiv = document.getElementById("exclusao");
    alertaDiv.style.display = "block";

    setTimeout(() => {
        alertaDiv.style.display = "none";
    }, 3000);
}
function gravacao() {
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

//Enfermeiro
document.addEventListener("DOMContentLoaded", () => {
    const enfermeiro = document.querySelector("#enfermeiro");
    if (enfermeiro) {
        enfermeiro.addEventListener("click", botaoEnfermeiro);
    }
    function botaoEnfermeiro(){
        window.location.href = "../html/enfermeiros/enfermeiro.html";
    }
    const voltar = document.querySelector("#voltarEnf");
    if (voltar) {
        voltar.addEventListener("click", equipeVoltar);
    }
    function equipeVoltar(){
        window.location.href = "../../html/equipe.html";
    }
    const avancarEnf = document.querySelector("#avancarEnf");
    if (avancarEnf) {
        avancarEnf.addEventListener("click", avancarEnfermeiro);
    }
    function avancarEnfermeiro(){
        window.location.href = "../../html/enfermeiros/especialidadeEnf.html";
    }
    const voltarEnf = document.querySelector("#backEnfermeiro");
    if (voltarEnf) {
        voltarEnf.addEventListener("click", voltarEnfermeiro);
    }
    function voltarEnfermeiro(){
        window.location.href = "../../html/enfermeiros/enfermeiro.html";
    }
    const gravarEnfermeiro = document.querySelector("#gravarEnfermeiro");
    if (gravarEnfermeiro) {
        gravarEnfermeiro.addEventListener("click", gravarEnf);
    }
    function gravarEnf(){
        window.location.href = "../../html/enfermeiros/enfermeiroCadastrado.html";
    }
    const voltarEnfCad = document.querySelector("#voltarEnfCad");
    if (voltarEnfCad) {
        voltarEnfCad.addEventListener("click", voltarEnfCadastrado);
    }
    function voltarEnfCadastrado(){
        window.location.href = "../../html/enfermeiros/enfermeiroCadastrado.html";
    }
    const savAlteracoesEnf = document.querySelector("#savAlteracoesEnf");
    if (savAlteracoesEnf) {
        savAlteracoesEnf.addEventListener("click", savAlteracoesEnfermeiro);
    }
    function savAlteracoesEnfermeiro(){
        window.location.href = "../../html/enfermeiros/novoEnfermeiro.html";
    }
    const alteraEnfermeiro = document.querySelector("#alteraEnfermeiro");
    if (alteraEnfermeiro) {
        alteraEnfermeiro.addEventListener("click", altEnfermeiro);
    }
    function altEnfermeiro(){
        window.location.href = "../../html/enfermeiros/alterarEnfermeiro.html";
    }
    const consultarEnfermeiro = document.querySelector("#consultarEnfermeiro");
    if (consultarEnfermeiro) {
        consultarEnfermeiro.addEventListener("click", consulEnfermeiro);
    }
    function consulEnfermeiro(){
        window.location.href = "../../html/enfermeiros/consultarEnfermeiro.html";
    }
    const voltarCadastradoEnf = document.querySelector("#voltarCadastradoEnf");
    if (voltarCadastradoEnf) {
        voltarCadastradoEnf.addEventListener("click", voltarCadastradoEnfermeiro);
    }
    function voltarCadastradoEnfermeiro(){
        window.location.href = "../../html/enfermeiros/novoEnfermeiro.html";
    }
    const excluirEnfermeiro = document.querySelector("#excluirEnfermeiro");
    if (excluirEnfermeiro) {
        excluirEnfermeiro.addEventListener("click", excluirEnf);
    }
    function excluirEnf(){
        window.location.href = "../../html/enfermeiros/excluirEnfermeiro.html";
    }
    const incluirEnfermeiro = document.querySelector("#incluirEnfermeiro");
    if (incluirEnfermeiro) {
        incluirEnfermeiro.addEventListener("click", incluirEnf);
    }
    function incluirEnf(){
        window.location.href = "../../html/enfermeiros/enfermeiro.html";
    }

})