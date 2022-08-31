import React from "react";

const Gallery = ({ imageUrls }) => {
    const url_1 = imageUrls[0].url;
    const url_2 = imageUrls[1].url;
    const url_3 = imageUrls[2].url;
    const url_4 = imageUrls[3].url;
    const url_5 = imageUrls[4].url;

    return (
        <div className="gallery-div-row">
            <img className="gallery-img-1" src={require('../static/images/property/' + url_1 + '.jpg')} />
            <div className="gallery-div-row">
                <div className="gallery-div-column">
                    <img className="gallery-img-2" src={require('../static/images/property/' + url_2 + '.jpg')} />
                    <img className="gallery-img-3" src={require('../static/images/property/' + url_3 + '.jpg')} />
                </div>
                <div className="gallery-div-column">
                    <img className="gallery-img-4" src={require('../static/images/property/' + url_4 + '.jpg')} />
                    <img className="gallery-img-5" src={require('../static/images/property/' + url_5 + '.jpg')} />
                </div>
            </div>
        </div>
    )
}

export default Gallery;