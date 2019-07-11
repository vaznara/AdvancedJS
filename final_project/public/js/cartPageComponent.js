Vue.component('cart-page', {

    methods: {
        clearCart() {
            this.$root.clearJson(`/api/cart/`)
                .then(data => {
                    if(data.result){
                        this.$root.$refs.header.$refs.cart.cartProducts = [];
                    }
                })
        }
    },
    template: `<section class="cart__section">
    <div class="container">
        <div class="products__grid_heading">
            <div class="product__cart_desc">product details</div>
            <div class="product__cart_price">unit price</div>
            <div class="product__cart_quantity">quantity</div>
            <div class="product__cart_shipping">shipping</div>
            <div class="product__cart_subtotal">subtotal</div>
            <div class="product__cart_action">action</div>
        </div>
        <div class="products__grid_row" v-for="product of $root.$refs.header.$refs.cart.cartProducts" :key="product.id_product">
            <div class="product__cart_desc">
                <div class="product__img_wrapper">
                    <img :src="product.product_img" :alt="product.product_name" class="product__cart_img"></div>
                <div class="product__desc_wrapper">
                    <h3 class="product__name">{{ product.product_name }}</h3>
                    <div class="product__desc_text">
                        <p class="product__color"><b>Color</b>: red</p>
                        <p class="product__size"><b>Size</b>: XL</p></div>
                </div>
            </div>
            <div class="product__cart_price">$ {{product.price}}</div>
            <div class="product__cart_quantity"><input @change="$event.target.value > product.quantity ? $root.$refs.header.$refs.cart.addProduct(product) : $root.$refs.header.$refs.cart.removeProduct(product)" type="number" min="1" :value="product.quantity"></div>
            <div class="product__cart_shipping">FREE</div>
            <div class="product__cart_subtotal">$ {{product.price * product.quantity}}</div>
            <div class="product__cart_action"><div @click="$root.$refs.header.$refs.cart.removeProduct(product, true)" class="cart__del_btn"><img src="images/cart_del_btn.png" alt="delete"></div></div>
        </div>
        <div class="products__grid_btns">
            <div @click="clearCart()" class="grey__btn wholecart__btn">cLEAR SHOPPING CART</div>
            <a href="shop.html" class="grey__btn wholecart__btn">cONTINUE sHOPPING</a>
        </div>
        <div class="checkout__total">

            <div class="shipping__address">
                <h2>Shipping Adress</h2>
                <div class="shipping__address_input"><select class="state__input" name="Country">
                    <option value="Bangladesh">Bangladesh</option>
                </select></div>
                <div class="shipping__address_input"><input class="state__input" type="text" placeholder="State"></div>
                    <div class="shipping__address_input"><input class="state__input" type="text" placeholder="Postcode / Zip"></div>
                <div class="grey__btn small__btn">get a quote</div>
            </div>
            <div class="coupon__discounts">
                <h2>coupon  discount</h2>
                <p class="coupon__hint">Enter your coupon code if you have one</p>
                <div class="shipping__address_input"><input class="state__input" type="text" placeholder="State"></div>
                <div class="grey__btn small__btn">Apply coupon</div>
            </div>
            <div class="grand__total">
                <div class="grand__total_text"><p class="total__small_text">Sub total <span>$ {{ $root.$refs.header.$refs.cart.cartSum }}</span></p>
                <p class="total__big_text">GRAND TOTAL <span class="colored__text">$ {{ $root.$refs.header.$refs.cart.cartSum }}</span></p></div>
                <div class="grand__total_line"></div>
                <div class="checkout__button">proceed to checkout</div>
            </div>
        </div>
    </div>
</section>`
})