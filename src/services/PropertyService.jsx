const baseURL = 'http://localhost:8080/api/properties/'

const PropertyService = {
    getProperties() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    updateProperty(property) {
        return fetch(baseURL + property.id, {
            method: 'PUT',
            body: JSON.stringify(property),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    },

    addProperty(property) {
        return fetch(baseURL, {
          method: 'POST',
          body: JSON.stringify(property),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json());
    },

    deleteProperty(id) {
        return fetch(baseURL + id, {
          method: 'DELETE'
        });
    }
}

export default PropertyService;