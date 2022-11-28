import React from "react";
import photo from "../components/photo-1600585154340-be6161a56a0c.jpg";
import SimpleImageSlider from "react-simple-image-slider";



function CarouselProperties(){

    const images = [
       photo,
       photo,
       photo
      ];

return(
   
   
    <div>
    <SimpleImageSlider
      width={373}
      height={250}
      images={images}
      showBullets={true}
      showNavs={true}
    />
  </div>
 
   
)


}

export default CarouselProperties;