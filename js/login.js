const alertPlaceholder = document.getElementById('apareceAlert');

function showAlert(message, type) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible fade show mt-3 p-2" role="alert">${message}</div>`
    ].join('');
    alertPlaceholder.innerHTML = ''; // limpa alertas anteriores
    alertPlaceholder.append(wrapper);
}

function login() {
    let user = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    if (user == "adm@gmail.com" && senha == "1234") {
        location.href = 'contaUsuario.html'
    } else {
        showAlert('Email ou senha incorretos!', 'danger')
    }
}