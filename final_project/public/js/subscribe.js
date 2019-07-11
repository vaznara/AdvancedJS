Vue.component('subscribe-template', {
    template: `<section class="subscribe">
    <div class="container__wide subscribe__bg">
        <div class="container">
            <div class="subscribe__content">
                <div class="subscribe__left__content"><img class="photo" src="images/photo.jpg" alt="photo">
                    <div class="main__content">
                        <p class="quote">“Vestibulum quis porttitor dui! Quisque viverra nunc&nbsp;mi, a pulvinar
                            purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                        <br>
                        <p class="name">Bin Burhan</p>
                        <p class="name__sub">Dhaka, Bd</p>
                        <div class="line__switchs">
                            <div class="line__switch sw1"></div>
                            <div class="line__switch sw2"></div>
                            <div class="line__switch sw1"></div>
                        </div>
                    </div>
                </div>
                <div class="subscribe__right__content">
                    <p class="subscribe__header">Subscribe</p>
                    <p class="subscribe__text">FOR OUR NEWLETTER AND PROMOTION</p>
                    <form class="subscribe__form" action="#">
                        <input class="subscribe__form__text" placeholder="Enter Your Email" type="email">
                        <input class="subsribe__submit" type="submit" value="Subscribe"></form>
                </div>
            </div>
        </div>
    </div>
</section>`
})