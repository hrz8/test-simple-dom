const URL_MOCK_API = 'https://65311e434d4c2e3f333c6924.mockapi.io/users';

async function doLogin({
    email,
    password,
}) {
    const res = await fetch(URL_MOCK_API, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const users = await res.json();

    const user = users.find((us) => {
        return us.email === email && us.password === password;
    });

    if (user === undefined) {
        alert('login failed');
        return;
    }

    localStorage.setItem('email', user.email);
    alert('login success');
}

const formLogin = document.getElementById('form-login');
formLogin.addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;

    await doLogin({
        email,
        password,
    })
});
