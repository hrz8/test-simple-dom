function checkLogin() {
    const user = localStorage.getItem('email');

    const restricted = document.getElementById('restricted');
    const anonymous = document.getElementById('anonymous');

    if (user) {
        restricted.style.display = 'block';
    } else {
        anonymous.style.display = 'block';
    }
}

checkLogin();
