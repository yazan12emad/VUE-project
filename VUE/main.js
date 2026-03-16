// Create a new Vue application and mount it to the #app
// (id) element in the DOM (index file)
// 'product': 'Socks', product is a property of the data object, and its value is 'Socks'.
// This means that within the Vue application, you can access this property using
// {{ product }} in the template, and it will display 'Socks'. like key value pair in an object.

const app = Vue.createApp({
  data() {
    return {
      product: {
        name: "Socks",
      },
      cart: [],
      brand: "Vue",
      premium: true,
      welcome: "This product is goood ",
    };
  },
  methods: {
    addToCart(id) {
      this.cart.push(id);
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product.name;
    },
  },
});

// Parent → Child = Props
// Child → Parent = Events
//The Options API structure
// createApp({
//   data(){},        // state
//   methods:{},      // functions
//   computed:{},     // calculated values
//   watch:{},        // watchers
//   mounted(){},     // lifecycle hook
// })

// Attribute binding in Vue allows you to bind HTML attributes to data properties in your Vue instance.
//  This means that you can dynamically set the value of an attribute based on the data in your Vue application.
// For example, you can bind the 'src' attribute of an image to a data property that contains the URL of the image.
// This allows you to easily update the image source by changing the value of the data property, without having to manually manipulate the DOM.
//v-bind is a directive in Vue that allows you to bind an HTML attribute to a data property.
// like the src ( v-bind:src="image" ) or ( img :src='image') of the image tag is bound to the 'image' property in the data object.
// and class , alt , style , href .

// The conditional rendering in Vue like if else in any language
// by v-if = "the attribute name " and v-else directives.
// <div class="image-container">
//   <h1 v-if="imageCon">The image is available 1</h1>
//   <h1 v-else-if="inStock > 50">The image is available 2</h1>
//   <h1 v-else-if="inStock > 0">The image is available 3</h1>
//   <p v-else>Image is not available</p>
// </div>
// if else need to be in the same parent element and v-else-if is used for multiple conditions.

// $emit Send a custom event to the parent component
//addToCart(){
//     this.$emit('add-to-cart')
//   }

// The list rendering in Vue is done using the v-for directive, which allows you to render a list of items based on an array of data.
// For example, you can use v-for to render a list of products in an online store.
// You would have an array of product objects in your data, and then use v-for to loop through the array and render each product in the template.
// This makes it easy to display dynamic lists of data in your Vue application without having to manually manipulate the DOM.
// <ul>
//   <li v-for="product in products" :key="product.id">
//     {{ product.name }} - {{ product.price }}

// event handling in Vue is done using the v-on directive, which allows you to listen for events on elements and execute a method when the event occurs.
// For example, you can use v-on to listen for a click event on a button and execute a method that updates the data in your Vue application.
// This allows you to create interactive applications that respond to user input without having to manually manipulate the DOM.
// <h1> {{ card }} </h1> when cart =0 ;
// <button v-on:click="card++">Add to Cart</button> to increment the cart value by 1 when the button is clicked.
// <button v-on:click="addTOCart">Add to Cart</button>  in this situation we will define a method
// called addToCart in the methods object of the Vue instance,and it will contain the logic to increment the cart value by 1 when the button is clicked.

// mouseover and mouseleave events in Vue can be handled using the v-on directive as well.
// For example, you can use v-on:mouseover to listen for a mouseover event on an element and execute a
//  method that changes the background color of the element.
// Similarly, you can use v-on:mouseleave to listen for a mouseleave event and execute a method that resets the background color.
// This allows you to create interactive elements that respond to user interactions in your Vue application.

// in styleing by vue use the :style in the tag
// <div :style ="{backgroundColor : the variable }" to add the class , style

// Computed propirties
// add new option ( data() , methods) this is options add functions on it
// that compine the propirties like( product : {name : 'Soucks')
//

// Components are the building blocks , The content of the page as blocks
// each block could has another blocks
// Steps:
// 1- make component folder  / make the files ( js file app.component)
//app.component('product-display' , { }) => component name   and the obj to configue it (html code)
// /*Html*/ to see the code as is + `` and add (,) to add the function and the properties


// Forms 
// create a form like any form in html 
// in the form add the 2 way binding by v-model 
// @submit-prevent="submit" to listen to the submit and to prevent the default 
// behavior of the browser 