const baseURL = 'http://localhost:8080/api/guests/'

const GuestService = {
    getGuests() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    updateGuest(guest) {
        return fetch(baseURL + guest.id, {
            method: 'PUT',
            body: JSON.stringify(guest),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    },

    addGuest(guest) {
        return fetch(baseURL, {
          method: 'POST',
          body: JSON.stringify(guest),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json());
    },

    deleteGuest(id) {
        return fetch(baseURL + id, {
          method: 'DELETE'
        });
    }
}

export default GuestService;