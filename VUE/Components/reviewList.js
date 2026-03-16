app.component('review-list', {
  props: {
    reviews: { type: Array, required: true }
  },
  template: `
    <h2>Reviews</h2>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} with rating {{ review.rating }}
      </li>
    </ul>
  `
})