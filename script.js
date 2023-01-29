const password = document.getElementById('password');
const confirm = document.getElementById('confirmpassword');

password.addEventListener('keyup', () => {
    const isValid = password.checkValidity();
    if (isValid) {
        password.className = 'success';
    } else {
        password.className = 'error';
    }
});

confirm.addEventListener('keyup', () => {
    if (confirm.value === password.value) {
        confirm.className = 'success';
    } else {
        confirm.className = 'error';
    }
});
