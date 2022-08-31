import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropertyService from "../services/PropertyService";

const PropertyGallery = () => {
    const {id} = useParams();
    const [property, setProperty] = useState(null);
    const [imgUrls, setImageUrls] = useState([]);

    useEffect(() => {
        PropertyService.findProperty(id)
        .then(res => setProperty(res))
    }, []);

    useEffect(() => {
        PropertyService.findProperty(id)
        .then(res => setImageUrls(res.imageUrls))
    }, []);

    const images = imgUrls.map(element => {
        return <img className="img-gallery-page" src={require('../static/images/property/' + element.url + '.jpg')} key={element.id} />
    })

    if(!property) {
        return <p>Loading...</p>
    }

    return <div>{images}</div>
}

export default PropertyGallery;