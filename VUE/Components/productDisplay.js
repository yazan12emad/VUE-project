app.component('product-display' , {
    props : { 
        premium : {
            type: Boolean ,
            required : true  
        }, 
        welcome: { 
          type: String, 
          required: true
         }
    } , 
     
    template : 
    /*Html*/ 
    ` <div class="con">
          <div class="img-card">
            <img :src="image" alt="product image" />

            <h2 v-if="inStock >= 11">Still has {{ inStock }}</h2>
            <h2 v-else-if="inStock > 0 && inStock <= 10">Almost sold</h2>
            <h2 v-else>Out of stock</h2>
            <h2> Shipping is {{shipping}} </h2>
            <div class="sub-con">
              <div
                class="list"
                v-for="(detail , index ) in details"
                :key="detail.id"
                @mouseover="updateVariante(index)"
                :style="{ backgroundColor: detail.color }"
              ></div>
            </div> 
            <product-details :welcome="welcome" > </product-details>
            <button
              :disabled="!inStock"
              class="btn"
              :class="{ disablesBtn: !inStock }"
              @click="addToCart"
            >
              Add to cart
            </button>
          </div>
          
        </div> 
        <review-list :reviews="reviews"></review-list>
        <review-form @review-submitted="reviewsForm"></review-form>
` , 
         data(){
                return {
             selectedVariante : 0,             
            details: [
                {id : 1234 , name : 'green sacks' , color : 'green' ,
                     image : './assets/socks_green.jpg' , quantity : 150 },
                {id : 1235 , name : 'blue sacks' , color : 'blue' ,
                     image : './assets/socks_blue.jpg' , quantity : 0}
                ], 
                reviews :[]
        }
    } , 
    methods: {
        addToCart() {
        this.$emit('add-to-cart',this.details[this.selectedVariante].id)
    } , 

    updateVariante(index){
        this.selectedVariante = index;
    } , 
    reviewsForm(review) {
  this.reviews.push(review)
}
} ,
    computed: {
            title(){
               return this.brand + " " + this.product.name 
            } ,
            image(){
                return this.details[this.selectedVariante].image;
            } ,
            inStock(){
                 return this.details[this.selectedVariante].quantity;
            } , 
            shipping(){
              if(this.premium)
                  return 'free'
                return 2.99
            }
    }


})

// (component name , obj -the code with- , the properties that uses in the code)
// The template work is important 