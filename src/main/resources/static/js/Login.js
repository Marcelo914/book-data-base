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
    var usernameInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var registerForm = document.getElementById('registerForm');
    var loginForm = document.getElementById('loginForm');
    var errorPopup = document.getElementById('errorPopup');
    var errorMessage = errorPopup.querySelector('.message');
    var closePopup = errorPopup.querySelector('.close');

    if (submitLink && usernameInput && passwordInput && errorPopup && errorMessage && closePopup) {
        submitLink.addEventListener('click', async function(event) {
            if (loginForm.classList.contains('hidden')) {
                // Captura os dados de cadastro
                const username = registerForm.querySelector('input[placeholder="usuário"]').value.trim();
                const email = registerForm.querySelector('input[placeholder="Email"]').value.trim();
                const password = registerForm.querySelector('input[placeholder="senha"]').value.trim();
                const confirmPassword = registerForm.querySelector('input[placeholder="Confirmar senha"]').value.trim();

                var hasError = false;
                var message = '';

                if (username === '') {
                    hasError = true;
                    message += 'O campo "Email" precisa ser preenchido.<br>';
                }

                if (email === '') {
                    hasError = true;
                    message += 'O campo "Email" precisa ser preenchido.<br>';
                }

                if (password === '') {
                    hasError = true;
                    message += 'O campo "Senha" precisa ser preenchido.<br>';
                }

                if (password !== confirmPassword) {
                    hasError = true;
                    message += 'As senhas não coincidem.<br>';
                }

                if (hasError) {
                    errorMessage.innerHTML = message;
                    errorPopup.style.display = 'block';
                } else {
                    try {
                        // Envia os dados de cadastro ao servidor
                        const response = await fetch('URL_DO_SEU_BACKEND/api/register', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ username: username, email: email, password: password })
                        });

                        const result = await response.json();
                        if (response.ok && result.success) {
                            // Redireciona para a página de login ou para outra página após o cadastro
                            window.location.href = 'Login';
                        } else {
                            errorMessage.innerHTML = result.message || 'Erro ao fazer o cadastro.';
                            errorPopup.style.display = 'block';
                        }
                    } catch (error) {
                        console.error('Erro:', error);
                        errorMessage.innerHTML = 'Ocorreu um erro ao tentar se conectar ao servidor.';
                        errorPopup.style.display = 'block';
                    }
                }
            } else {
                // Código existente para o login permanece o mesmo
                usernameInput.classList.remove('error');
                passwordInput.classList.remove('error');

                var username = usernameInput.value.trim();
                var password = passwordInput.value.trim();

                var hasError = false;
                var message = '';

                if (username === '') {
                    usernameInput.classList.add('error');
                    message += 'O campo "Email" precisa ser preenchido.<br>';
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
                    window.location.href = '#';
                }
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
