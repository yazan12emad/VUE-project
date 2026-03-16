app.component('review-form', {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
      <input class="input" id="name" type="text" placeholder="Name" v-model="name" />

      Rating
      <select class="input" id="rating" v-model.number="rating">
        <option disabled value="">Select</option>
        <option>5</option><option>4</option><option>3</option><option>2</option><option>1</option>
      </select>

      <button class="btn" type="submit">Submit</button>
    </form>
  `,
  data() {
    return { name: '', rating: null }
  },
  methods: {
    onSubmit() {
      const productReview = { name: this.name, rating: this.rating }
      this.$emit('review-submitted', productReview)
      this.name = ''
      this.rating = null
    }
  }
})