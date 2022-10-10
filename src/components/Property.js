import React from "react"
import photo from "./photo-1600585154340-be6161a56a0c.jpg"



function Property(props) {

  return (
    <div className="col-md-4">
    <div className="card-box-a card-shadow">
      <div className="img-box-a">
    
        <img src={photo} alt="helo" className="img-a img-fluid">
            </img>
     
      </div>
      <div className="card-overlay">
        <div className="card-overlay-a-content">
          <div className="card-header-a">
            <h2 className="card-title-a">
              <a href="#">{props.property.street}
                <br /> Olive Road Two</a>
            </h2>
          </div>
          <div className="card-body-a">
            <div className="price-box d-flex">
              <span className="price-a">rent | $ {props.property.price}</span>
            </div>
            <a href="property-single.html" className="link-a">Click here to view
              <span className="bi bi-chevron-right"></span>
            </a>
          </div>
          <div className="card-footer-a">
            <ul className="card-info d-flex justify-content-around">
              <li>
                <h4 className="card-info-title">Area</h4>
                <span>340m
                  <sup>2</sup>
                </span>
              </li>
              <li>
                <h4 className="card-info-title">Beds</h4>
                <span>2</span>
              </li>
              <li>
                <h4 className="card-info-title">Baths</h4>
                <span>4</span>
              </li>
              <li>
                <h4 className="card-info-title">Garages</h4>
                <span>1</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>


    // {/* <div>Id:{props.property.id} Street:{props.property.street} HomeType: {props.property.propertyType}</div> */}
    
  )
}

export default Property;