import React from "react";
import { Link } from "react-router-dom";

const Gallery = ({ property, imageUrls }) => {
    const url_1 = imageUrls[0].url;
    const url_2 = imageUrls[1].url;
    const url_3 = imageUrls[2].url;
    const url_4 = imageUrls[3].url;
    const url_5 = imageUrls[4].url;

    const url = "/property/gallery/" + property.id;

    return (
        <Link to={url} >
            <div className="row-wrap padding1">
                <img className="gallery-img-1" src={require('../static/images/property/' + url_1 + '.jpg')} />
                <div className="row-wrap">
                    <div className="column-wrap">
                        <img className="gallery-img-2" src={require('../static/images/property/' + url_2 + '.jpg')} />
                        <img className="gallery-img-3" src={require('../static/images/property/' + url_3 + '.jpg')} />
                    </div>
                    <div className="column-wrap">
                        <img className="gallery-img-4" src={require('../static/images/property/' + url_4 + '.jpg')} />
                        <img className="gallery-img-5" src={require('../static/images/property/' + url_5 + '.jpg')} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Gallery;