import { defineStore } from 'pinia';
import { ref } from 'vue';

// todo array merge and increase quantity on same products (do I use `...` to merge hehe or is there a pinion store function to do so and a transform/calculate func to get quantity), persist against refreshes without being saved to db and also save to db on basket change.
export const useBasketStore = defineStore( 'BasketStore' , () => {

    const basket = ref ({
        basket_products: [],
        created_at : null,
        updated_at : null
        }
    )

    function addProduct(product, basket) {
        console.log(basket);
        console.log(product);
        // todo do we calculate quantity and persist to db from here?
        this.basket.basket_products.push(product);
        setState(basket);
    }

    // todo learn about set state
    function setState(basket) {
        console.log ('here');
        // todo good practice use getter here or pass products along?
        // basket = getBasket();

        basket.basket_products.state () => ref ({
                basket_products: basket,
                created_at : null,
                updated_at : null
            }



            basket.basket_products.state (basket) ;
            // => ref ({
            //     basket_products: basket,
            //     created_at : null,
            //     updated_at : null
            // }
        // )
    }

    function getBasket() {
        return basket;
    }
    return { basket, addProduct };
})

// todo confirm which api below is and if for vue 2or3
// import { defineStore } from 'pinia'
//
// export const useShoppingStore = defineStore({
//     id: 'shopping',
//
//     // Define the state
//     state: () => ({
//         basket: [],
//     }),
//
//     // Define getters
//     getters: {
//         // Getter to access the shopping basket
//         getBasket() {
//             return this.shoppingBasket;
//         },
//     },
//
//     // Define actions
//     actions: {
//         // Action to add an item to the shopping basket
//         addItemToBasket(item) {
//             this.shoppingBasket.push(item);
//         },
//     },
// })
