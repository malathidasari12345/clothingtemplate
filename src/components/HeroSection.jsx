import Carousel from 'react-bootstrap/Carousel';
import "../assets/styles/HeroSection.css";
import 'animate.css';

function HeroSection() {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ramrajcotton.in/cdn/shop/files/little_stsrs_Desktop_Cover_Page_2.jpg?v=1727789756&width=2000"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ramrajcotton.in/cdn/shop/files/Silk_Desktop_Cover_Page_2024_87d02cdf-27b7-45aa-bf39-caabd18f416d.jpg?v=1727788808&width=2000"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ramrajcotton.in/cdn/shop/files/Matching_Sets_Desktop_Cover_Page.jpg?v=1727789310&width=2000"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <br></br>
      <center ><h1>Festival Collection</h1></center>
      <div className="additional-images">
  <img 
    className="animate__animated animate__fadeIn" 
    src="https://ramrajcotton.in/cdn/shop/files/Father_and_son_Combo_Festival_Collection_SQUARE_BANNER.png?v=1727854164&width=800" 
    alt="11" 
  />
  <img 
    className="animate__animated animate__fadeIn" 
    src="https://ramrajcotton.in/cdn/shop/files/Diwali_Festival_Collection_Google_add_SQUARE_BANNER_6.jpg?v=1727853373&width=800" 
    alt="1" 
  />
  <img 
    className="animate__animated animate__fadeIn" 
    src="https://ramrajcotton.in/cdn/shop/files/Couple_Combo_1_Diwali_Festival_Collection_Google_add_SQUARE_BANNER.png?v=1727865165&width=800" 
    alt="4" 
  />
  <img 
    className="animate__animated animate__fadeIn" 
    src="https://ramrajcotton.in/cdn/shop/files/Diwali_Festival_Collection_Google_add_SQUARE_BANNER_4.jpg?v=1727853561&width=800" 
    alt="2" 
  />
  <img 
    className="animate__animated animate__fadeIn" 
    src="https://ramrajcotton.in/cdn/shop/files/BAMBOO_COTTON_WHITE_SHIRT_Google_add_SQUARE_BANNER.jpg?v=1727865043&width=800" 
    alt="5" 
  />
  <img 
    className="animate__animated animate__fadeIn" 
    src="https://ramrajcotton.in/cdn/shop/files/Diwali_Festival_Collection_Google_add_SQUARE_BANNER_3.jpg?v=1727854092&width=800" 
    alt="3" 
  />
</div>

    </div>
  );
}

export default HeroSection;
