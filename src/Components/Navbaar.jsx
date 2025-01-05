import React from 'react'

function Navbaar({setCategory}) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-shadow-lg "data-bs-theme="dark">
  <div className="container-fluid sticky-top">
    <a className="navbar-brand" href="#" >
        <img src="https://tse2.mm.bing.net/th?id=OIP.xuDE02BgR2_EL91DRg29pwHaDt&pid=Api&P=0&h=180" style={{height:"50px", width:"100px",marginLeft:"20px"}} className="card-img-top " alt="..."/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
          <div className="nav-link text-light" onClick={()=>setCategory("technology")}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("science")}>Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
        
      </ul>
    </div>
  </div>
  <form className="d-flex px-2 mx-auto" role="search" style={{width:"32rem"}}>
        <input className="form-control mx-auto " type="search" placeholder="Search" aria-label="Search"/>
      </form>
</nav>
</div>
  )
}

export default Navbaar
{/* <span className='badge bg-light text-dark fs-4'>NewsMag</span> */}
