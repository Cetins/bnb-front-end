const baseURL = 'http://localhost:8080/api/bookings/'

const BookingService = {
    getProperties() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    findBooking(id) {
      return fetch(baseURL + id)
          .then(res => res.json());
    },

    updateBooking(booking) {
        return fetch(baseURL + booking.id, {
            method: 'PUT',
            body: JSON.stringify(booking),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    },

    addBooking(booking) {
        return fetch(baseURL, {
          method: 'POST',
          body: JSON.stringify(booking),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json());
    },

    deleteBooking(id) {
        return fetch(baseURL + id, {
          method: 'DELETE'
        });
    }
}

export default BookingService;