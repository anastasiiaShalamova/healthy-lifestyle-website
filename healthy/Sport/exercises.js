Vue.component('product', {

    template: 
    `
    <div class="product">
  

                <div class = "right"><button @click="removeFromCart" :disabled="!inStock"> &minus;</button></div>
                    <div class = "right"  v-if=  "inStock == 0"><p> &#128148; <span :class="{isRed: inStock === 0}"> {{inStock}} </span> </p></div>
                    <div class = "right" v-else><p> &hearts; {{inStock}}</p></div>
                <button   @click="addToCart" > + </button>
        
           
            
  
      
      </div>
    `,


    data() {
      return {
          inStock: 0,
          cart: 0
      }
    },
     methods: {
        addToCart: function() {
            this.$emit('add-to-cart'),
            this.inStock += 1
        },
        removeFromCart: function() {
             this.$emit('remove-from-cart'),
             this.inStock -= 1
        }
      }
  })

  Vue.component('product2', {

    template: 
    `
    <div class="product">
  

                <div class = "right"><button @click="removeFromCart" :disabled="!inStock"> &minus;</button></div>
                    <div class = "right"  v-if=  "inStock == 0"><p> &#128148; <span :class="{isRed: inStock === 0}"> {{inStock}} </span> </p></div>
                    <div class = "right" v-else><p> &hearts; {{inStock}}</p></div>
                <button   @click="addToCart" > + </button>
        
           
            
  
      
      </div>
    `,


    data() {
      return {
          inStock: 0,
          cart: 0
      }
    },
     methods: {
        addToCart: function() {
            this.$emit('add-to-cart'),
            this.inStock += 1
        },
        removeFromCart: function() {
             this.$emit('remove-from-cart'),
             this.inStock -= 1
        }
      }
  })

  
  var app = new Vue({
      el: '#app',
      data: {
        cart: 0
      },
      methods: {
        updateCart() {
          this.cart  += 1
        },
        removeItem() {
          this.cart  -= 1
        }
      }
  })