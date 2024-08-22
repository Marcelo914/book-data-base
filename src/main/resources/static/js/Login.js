function showLogin() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginBtn').classList.add('active');
    document.getElementById('registerBtn').classList.remove('active');
}

function showRegister() {
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerBtn').classList.add('active');
    document.getElementById('loginBtn').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    var submitLink = document.getElementById('submitLink');
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var errorPopup = document.getElementById('errorPopup');
    var errorMessage = errorPopup.querySelector('.message');
    var closePopup = errorPopup.querySelector('.close');

    if (submitLink && usernameInput && passwordInput && errorPopup && errorMessage && closePopup) {
        submitLink.addEventListener('click', function(event) {
            event.preventDefault();

            // Limpa as classes de erro dos campos
            usernameInput.classList.remove('error');
            passwordInput.classList.remove('error');

            var username = usernameInput.value.trim();
            var password = passwordInput.value.trim();

            var hasError = false;
            var message = '';

            if (username === '') {
                usernameInput.classList.add('error');
                message += 'O campo "Nome de Usuário" precisa ser preenchido.<br>';
                hasError = true;
            }

            if (password === '') {
                passwordInput.classList.add('error');
                message += 'O campo "Senha" precisa ser preenchido.<br>';
                hasError = true;
            }

            if (hasError) {
                errorMessage.innerHTML = message;
                errorPopup.style.display = 'block';
            } else {
                window.location.href = 'Tela Principal/tela_principal.html';
            }
        });

        closePopup.addEventListener('click', function() {
            errorPopup.style.display = 'none';
        });


        window.addEventListener('click', function(event) {
            if (event.target === errorPopup) {
                errorPopup.style.display = 'none';
            }
        });
    } else {
        console.error('Um ou mais elementos não foram encontrados.');
    }
});

