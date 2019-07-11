Vue.component('cart', {
    data: function() {
        return {
            cartUrl: `/api/cart/`,
            cartProducts: []
        }
    },
    methods: {
        findProduct(productId) {
            return this.cartProducts.find(element => element.id_product === productId)
        },
        addProduct(product) {
            let findInCart = this.findProduct(product.id_product);
            if(findInCart) {
                this.$root.putJson(`${this.cartUrl}${findInCart.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result){
                            findInCart.quantity++
                        }
                    })
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$root.postJson(this.cartUrl, prod)
                    .then(data => {
                        if(data.result){
                            this.cartProducts.push(prod);
                        }
                    })
            }
        },
        removeProduct(product, isBigCart = false) {
            let findInCart = this.findProduct(product.id_product);
            if(isBigCart || findInCart.quantity === 1) {
                this.$root.deleteJson(`${this.cartUrl}${findInCart.id_product}`)
                    .then(data => {
                        if(data.result){
                            this.cartProducts.splice(this.cartProducts.indexOf(findInCart), 1);
                        }
                    })
            } else {
                this.$root.putJson(`${this.cartUrl}${findInCart.id_product}`, {quantity: -1})
                    .then(data => {
                        if(data.result){
                            findInCart.quantity--;
                        }
                    })
            }
        },
    },
    computed: {
        cartSum() {
            let sum = 0;
            for(let item of this.cartProducts) {
                sum += item.quantity * item.price;
            }
            return sum;
        }
    },
    mounted() {
        this.$root.getData(`/api/cart`)
            .then(data => {
                for(let el of data.contents) {
                    this.cartProducts.push(el);
                }
            })
    },
    template: `<div class="cart">
    <a class="cart__image" href="#"><img src="images/cart.svg" alt="cart">
        <div class="cart__count" v-if="cartProducts.length > 0"><p>{{cartProducts.length}}</p></div>
    </a>
    <div class="drop__down cart__hover">
        <p v-if="cartProducts.length === 0" class="empty__cart">Корзина пуста</p>
        <div v-else class="full__cart">
            <div class="arrow cart_arrow"></div>
            <div class="drop__down__col">
                <div class="cart__dropdown__flex" v-for="product of cartProducts" :key="product.id_product">
                    <a href="#">
                        <div><img class="cart__product__img" :src="product.product_img" :alt="product.product_name">
                        </div>
                    </a>
                    <a href="#">
                        <div class="cart__product__text">
                            <h3 class="cart__h"><a href="#">{{product.product_name}}</a></h3>
                            <img class="rating__stars" src="images/starts.png" alt="">
                            <p class="product__price cart__price">{{product.quantity}} x $ {{product.price}}</p>
                        </div>
                    </a>
                    <div @click="removeProduct(product)" class="cart__del__btn"><img src="images/cart_del_btn.png"
                                                                                     alt="delete"></div>
                </div>
                <div class="cart__dropdown__flex noborder">
                    <div class="cart__total">
                        <p class="cart__total__txt">total</p>
                        <p class="cart__total__txt">$ {{cartSum}}</p>
                    </div>
                </div>
                <div class="cart__dropdown__flex noborder">
                    <div class="cart__checkout__btn">
                        <div class="view_all cart__checkout__btn"><a href="checkout.html">checkout</a></div>
                        <div class="view_all cart__gotocart__btn"><a href="cart.html">go to cart</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
})