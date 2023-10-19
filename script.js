function checkLogin() {
    const user = localStorage.getItem('email');

    const member = document.getElementById('member');
    const anonymous = document.getElementById('anonymous');

    if (user) {
        member.style.display = 'block';
        document.getElementById('member-email').innerHTML = user;
    } else {
        anonymous.style.display = 'block';
    }
}

checkLogin();

const btnSignOut = document.getElementById('signout-btn');
btnSignOut.addEventListener('click', function(e) {
    e.preventDefault();

    localStorage.removeItem('email');
    location.reload();
})
