/* Домащнее задание №1 */

class Cart {
    constructor(container) {
        this.cartData = []; // Массив с данными товаров в корзине
        this.container = container; // Див корзины.
        this.init(); // Инициализация корзины
    }
    _cartPush() {
    } // Метод для добавления товаров в корзину;
    _cartDelete() {
    } // Метод для удаления товаров из корзины;
    _cartCalc() {
    } // Метод для расчета суммы корзины (кол-во, сумма);
    _cartRender() {
    } // Метод для отрисовки корзины.
    init() {
    } // Инициализация корзины.
}

class cartElement {
    constructor(product) {
        this.id = product.id; // ID Товара
        this.title = product.title; // Наименование Товара
        this.price = product.price; // Цена товара
        this.productCount = product.productCount; // Кол-во товара
        this.sum = product.productCount * product.price; // Сумма товара
        this.rating = product.rating; // Реитинг товара
    }

    _render() {
    } // Метод для отрисовки элемента товара корзины
}

/* Домащнее задание №2 */

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.data = [];
        this.allProducts = [];
        this.init();
    }

    init() {
        this._fetchProducts();
        this._render();
        this._cartSumCount();
    }

    _fetchProducts() {
        this.data = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 30},
            {id: 3, title: 'Keyboard', price: 55},
            {id: 4, title: 'Gamepad', price: 65},
        ];
    }

    _render() {
        const block = document.querySelector(this.container);
        for (let item of this.data) {
            const product = new ProductItem(item);
            this.allProducts.push(product);
            block.insertAdjacentHTML('beforeend', product.render());
        }
    }

    _cartSumCount() { // Метод для расчета суммы товаров каталога
        const sumBlock = document.querySelector('.products__sum')
        let cartSum = 0;
        for (let item of this.allProducts) {
            cartSum = cartSum + item.price;
        }
        sumBlock.insertAdjacentHTML('beforeend', `<b>Сумма товаров каталога:</b> ${cartSum} рублей`);
    }
}

class ProductItem {
    constructor(product, img = `https://placehold.it/200x150`) {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price}</p>
                     <button class="btn buy-btn">Купить</button>
                 </div>
             </div>`
    }
}

const products = new ProductsList();