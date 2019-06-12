    document.querySelector('#submit').addEventListener('click', () => {

    const regexpName = new RegExp('^[a-z]+$', 'gi');
    const regexpPhone = new RegExp('^\\+\\d\\(\\d{3}\\)\\d{3}-\\d{4}$', 'gi');
    const regexpEmail = new RegExp('^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$', 'gi');

    let nameField = document.querySelector('#name');
    let phoneField = document.querySelector('#phone');
    let emailField = document.querySelector('#email');

    if (!regexpName.test(nameField.value)) {
        nameField.classList.add('red');
    } else {
        nameField.classList.remove('red');
    }

    if (!regexpPhone.test(phoneField.value)) {
        phoneField.classList.add('red');
    } else {
        phoneField.classList.remove('red');
    }

    if (!regexpEmail.test(emailField.value)) {
        emailField.classList.add('red');
    } else {
        emailField.classList.remove('red');
    }

})