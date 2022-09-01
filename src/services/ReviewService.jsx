const baseURL = 'http://localhost:8080/api/public/reviews'

const ReviewService = {
    getReviews() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    findReview(id) {
      return fetch(baseURL + "?id=" + id)
          .then(res => res.json());
    },

    updateReview(review) {
      const updateURL = baseURL + "/" + review.id;
      delete review.id
      return fetch(updateURL, {
        method: 'PUT',
        body: JSON.stringify(review),
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json());
    },

    addReview(review) {
        return fetch(baseURL, {
          method: 'POST',
          body: JSON.stringify(review),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json());
    },

    deleteReview(id) {
        return fetch(baseURL + "/" + id, {
          method: 'DELETE'
        });
    }
}

export default ReviewService;