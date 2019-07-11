class inputValidator {
    constructor(form) {
        this.form = form;
        this.regExp = {
            name: /^[a-z]+$/gi,
            phone: /^\+\d\(\d{3}\)\d{3}-\d{4}$/gi,
            email: /^([a-z0-9_.-]+)@([a-z0-9_.-]+).([a-z.]{2,6})$/gi
        };
        this.errorText = {
            name: `Имя должно содержать только буквы`,
            phone: `Телефон должен иметь след. формат +7(000)000-0000`,
            email: `email должен иметь след. формат test@test.com`
        }
        this.init();
    }

    _validateField() {

        let isValidated = true;
        for (let data in this.regExp) {
            let validateData = this.form.querySelector(`[data-${data}]`)
            if (!this.regExp[data].test(validateData.value)) {
                validateData.classList.add('red');
                isValidated = false;
                if(!validateData.value) {
                    this.form.querySelector(`.error_text[data-${data}]`).innerHTML = 'Поле должно быть заполнено.';
                } else {
                    this.form.querySelector(`.error_text[data-${data}]`).innerHTML =`${this.errorText[data]}`;
                }

            } else {
                validateData.classList.remove('red');
                this.form.querySelector(`.error_text[data-${data}]`).innerHTML =``;
            }
        }

        return isValidated;
    }

    init() {
        if(this._validateField()) {
            this.form.submit();
        }
    }
}


document.querySelector('form').addEventListener('submit', () => {
    event.preventDefault();
    let validate = new inputValidator(event.currentTarget);
})