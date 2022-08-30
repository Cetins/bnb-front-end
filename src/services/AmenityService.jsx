const baseURL = 'http://localhost:8080/api/amenities'

const AmenityService = {
    getAmenities() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    updateAmenity(amenity) {
        return fetch(baseURL + amenity.id, {
            method: 'PUT',
            body: JSON.stringify(amenity),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    },

    addAmenity(amenity) {
        return fetch(baseURL, {
          method: 'POST',
          body: JSON.stringify(amenity),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json());
    },

    deleteAmenity(id) {
        return fetch(baseURL + id, {
          method: 'DELETE'
        });
    }
}

export default AmenityService;