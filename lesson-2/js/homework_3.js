/* Домащнее задание №3 */

class Hamburger {
    constructor() {
        this.size = this._getSize();
        this.filling = this._getFilling();
        this.topping = this._getTopping();
        this.init();
    }

    _getSize() {
        let sizeSelect = document.querySelectorAll('input[name="size"]:checked')[0].dataset.id;

        let sizes = [
            {id: 0, title: 'Маленький', price: 50, calories: 20},
            {id: 1, title: 'Большой', price: 100, calories: 40},
        ];

        return sizes[sizeSelect];
    }

    _getFilling() {
        let fillingSelect = document.querySelectorAll('input[name="filling"]:checked')[0].dataset.id;

        let fillings = [
            {id: 0, title: 'С сыром', price: 10, calories: 20},
            {id: 1, title: 'С салатом', price: 20, calories: 5},
            {id: 2, title: 'С картофелем', price: 15, calories: 10},
        ];

        return fillings[fillingSelect];
    }

    _getTopping() {
        let toppingSelect = document.querySelectorAll('input[name="topping"]:checked');

        let toppings = [
            {id: 0, title: 'Приправа', price: 15, calories: 0},
            {id: 1, title: 'Майонез', price: 20, calories: 5},
        ];

        let toppingList = [];

        for (let topping of toppingSelect) {
            toppingList.push(toppings[topping.dataset.id]);
        }

        return toppingList;
    }

    _countPrice() {
        let burgerPrice = 0;

        for (let value of this.topping) {
            burgerPrice += value.price;
        }

        burgerPrice += this.size.price + this.filling.price;
        return burgerPrice;
    }

    _countCalories() {
        let burgerCalories = 0;

        for (let value of this.topping) {
            burgerCalories += value.calories;
        }

        burgerCalories += this.size.calories + this.filling.calories;
        return burgerCalories;
    }

    init() {
        document.querySelector('.sum__text').innerHTML = (`<p><b>Цена бургера:</b> ${this._countPrice()} рублей, <b>Всего калории:</b> ${this._countCalories()} кал</p>`)
    }
}

function main() {
    let burger = new Hamburger();
    console.log(burger);
}

let submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', main);