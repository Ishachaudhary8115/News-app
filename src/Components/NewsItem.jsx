import image from '../assets/1.jpg'

function NewsItem({ title, description, src, url }) {
  return (
    <div className="card text-bg-dark border border-0 shadow-lg mb-3 d-inline-block col-lg-4 col-md-6 m-2 ms-5" style={{ maxWidth: "27rem" }}>
      <img src={src ? src : image} style={{ height: "15rem", width: "26rem" }} className="card-img-top img-fluid" alt={title ? title : 'News Image'} />
      <div className="card-body">
        <h5 className="card-title fs-5">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "News has been defined differently by different experts. Some of the definitions are given below:"}</p>
        <a href={url} className="btn border border-secondary border shadow-lg text-secondary " target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem
