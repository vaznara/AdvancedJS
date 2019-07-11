Vue.component('header-template', {

    template: `<header class="header">
    <div class="container header__content">
        <div class="left__content">
            <a href="index.html" class="logo"><img src="images/logo.png" alt="logo">bran<span>d</span></a>
            <form class="form__search" action="#">
                <div class="form__button"><a href="#" class="form__button__link">Browse</a>
                    <div class="browse__arrow__div"><i class="fas fa-sort-down browse__arrow"></i></div>
                    <div class="drop__down browse__dropdown">
                        <div class="arrow"></div>
                        <div class="drop__down__col">
                            <div class="drop__down__cat">
                                <h3 class="drop__down__h3">Women</h3>
                                <ul class="drop__down__menu">
                                    <li class="drop__menu__item"><a href="shop.html" class="drop__menu__link">Dresses</a></li>
                                    <li class="drop__menu__item"><a href="shop.html" class="drop__menu__link">Tops</a></li>
                                    <li class="drop__menu__item"><a href="shop.html" class="drop__menu__link">Sweaters/Knits</a></li>
                                    <li class="drop__menu__item"><a href="shop.html" class="drop__menu__link">Jackets/Coats</a></li>
                                    <li class="drop__menu__item"><a href="shop.html" class="drop__menu__link">Blazers</a></li>
                                    <li class="drop__menu__item"><a href="shop.html" class="drop__menu__link">Denim</a></li>
                                    <li class="drop__menu__item"><a href="shop.html" class="drop__menu__link">Leggings/Pants</a></li>
                                    <li class="drop__menu__item"><a href="shop.html" class="drop__menu__link">Skirts/Shorts</a></li>
                                    <li class="drop__menu__item"><a href="shop.html" class="drop__menu__link">Accessories</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="drop__down__col">
                            <div class="drop__down__cat">
                                <h3 class="drop__down__h3">Men</h3>
                                <ul class="drop__down__menu">
                                    <li class="drop__menu__item"><a href="shop.html" class="drop__menu__link">Tees/Tanktops</a></li>
                                    <li class="drop__menu__item"><a href="shop.html" class="drop__menu__link">Shirts/Polos</a></li>
                                    <li class="drop__menu__item"><a href="shop.html" class="drop__menu__link">Sweaters</a></li>
                                    <li class="drop__menu__item"><a href="shop.html" class="drop__menu__link">Sweatshirts/Hoodies</a></li>
                                    <li class="drop__menu__item"><a href="shop.html" class="drop__menu__link">Blazers</a></li>
                                    <li class="drop__menu__item"><a href="shop.html" class="drop__menu__link">Jackets/vests</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <input class="form__text" type="text" placeholder="Search for Item...">
                <input class="form__submit" type="submit" value="">
            </form>
        </div>
        <div class="right__content">
            <cart ref="cart"></cart>
            <a class="button" href="#">My Account <i class="fas fa-sort-down"></i></a>
        </div>
    </div>
</header>`
})