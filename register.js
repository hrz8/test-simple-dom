const URL_MOCK_API = 'https://65311e434d4c2e3f333c6924.mockapi.io/users';

async function doRegister({
    firstName,
    lastName,
    email,
    password
}) {
    try {
        const res = await fetch(URL_MOCK_API, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
            }),
        });
        const result = await res.json();

        console.log(result);

        alert('register success');
    } catch (error) {
        alert('register failed');
    }
}

const formRegister = document.getElementById('form-register');
formRegister.addEventListener('submit', async function(event) {
    event.preventDefault();

    const firstName = document.getElementById('input-first-name').value;
    const lastName = document.getElementById('input-last-name').value;
    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;

    await doRegister({
        firstName,
        lastName,
        email,
        password,
    });
});
