function Carausel(){
    return(
        <>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" className="d-block w-100" alt="nature" height={400} width={700}/>
    </div>
    <div className="carousel-item active">
      <img src="https://akshitphotography.com/wp-content/uploads/2021/08/Nature-Photography-105.jpg" className="d-block w-100" alt="nature1"height={400} width={700} />
    </div>
    <div className="carousel-item">
      <img src="https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/library/our-cause/on-the-shore-borrowdale-and-derwent-water-1518851.jpg" className="d-block w-100" alt="nature2"height={400} width={700} />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    )
}
export default Carausel