import React from "react";

const NewsItem=(props)=> {

  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <>
        <div className="card" style={{width: "18rem", margin: "10px"}}>
          <img src={imageUrl ? imageUrl : "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{left:"92%", zIndex:"1"}}
            >
            {source}
            </span>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary">Read more </a>
          </div>
        </div>
      </>
    );
  }
  export default NewsItem;

