function entrar() {
    var usuario = document.getElementById('cnpj_cpf').value;
    var senha = document.getElementById('senha').value;

    if (usuario === '12345678912' && senha === '123456' || usuario === '12345678912345' && senha === '123456') {
        alert('Login efetuado com sucesso!')
        document.location.href = 'https://marlloncas.github.io/pmv-ads-2022-2-e1-proj-web-t3-grupo-2-1/src/Radix/tela_inicial.html';
    } else {
        alert ('Usuário não')
        document.getElementById('cnpj_cpf').value = '';
        document.getElementById('senha').value = '';
    }
}