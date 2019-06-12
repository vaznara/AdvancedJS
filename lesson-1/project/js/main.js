const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 30},
    {id: 3, title: 'Keyboard', price: 55},
    {id: 4, title: 'Gamepad', price: 75},
];

// Не знаю насколько я правильно понял 2-ое задание :) Добавил значение по умолчанию к аргументу price.
// Также сократил функцию убравь фигурные скобки и return, т.к. функция сразу возвращает результат.

const renderProduct = (title, price = 0) =>
                                                `<div class="product-item">
                                                    <h3>${title}</h3>
                                                    <img src="img/no_photo.jpg" alt="">
                                                    <p><b>Цена:</b> ${price}</p>
                                                    <button class="btn buy-btn">Купить</button>
                                                 </div>`;

// Насколько я понял запятая передается в innerHTML элемента при передаче массива.
// Я решил собрать массив в одну строку с помощью цикла.

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));

    let productsListDiv = '';

    for (let productDiv of productsList) {
        productsListDiv = `${productsListDiv}${productDiv}`;
    }
    document.querySelector('.products').innerHTML = productsListDiv;
};

renderPage(products);