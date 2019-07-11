const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: `/api/products`,
        products: [],
        featuredCount: 8,
        shopProductCount: 9
    },
    methods: {
        getData(url) {
            return fetch(url)
                    .then(result => result.json())
        },
        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => this.$refs.error.setText(error));
        },
        deleteJson(url){
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then(result => result.json())
        },
        clearJson(url){
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then(result => result.json())
        },
    },
    mounted() {
        this.getData(this.catalogUrl)
            .then(data => {
                for(let el of data) {
                    this.products.push(el);
                }
            })
    }
})