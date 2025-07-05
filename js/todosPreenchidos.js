const alertPlaceholder = document.getElementById('apareceAlert');

function showAlert(message, type) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} d-flex align-items-center" role="alert">
                    <i class="bi bi-exclamation-triangle-fill pe-2"></i>
                    <div>${message}</div>
                </div>`
    ].join('');
    alertPlaceholder.innerHTML = ''; // limpa alertas anteriores
    alertPlaceholder.append(wrapper);
}

function falta() {
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let data = document.getElementById('data').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    let alert1 = document.getElementById('alert1')
    let alert2 = document.getElementById('alert2')
    let alert3 = document.getElementById('alert3')
    let alert4 = document.getElementById('alert4')
    let alert5 = document.getElementById('alert5')

    let erro = false

    const mensagem = '* Preencha esse campo!'
    if (nome === '') {
        alert1.textContent = mensagem
        erro = true
    } else {
        alert1.textContent = ''
    }

    if (sobrenome === '') {
        alert2.textContent = mensagem
        erro = true
    } else {
        alert2.textContent = ''
    }

    if (data === '') {
        alert3.textContent = mensagem
        erro = true
    } else {
        alert3.textContent = ''
    }

    if (email === '') {
        alert4.textContent = mensagem
        erro = true
    } else {
        alert4.textContent = ''
    }

    if (senha === '') {
        alert5.textContent = mensagem
        erro = true
    } else {
        alert5.textContent = ''
    }

    if (erro) {
        showAlert(' Preencha todos os campos obrigatórios.', 'danger');
    } else {
        showAlert(' Todos os campos foram preenchidos!', 'success');
    }
}