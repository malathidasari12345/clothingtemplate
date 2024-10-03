import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import CustomNavbar from '../components/Navbar';
import Accessories from '../components/Accessories';
import ProductGrid from '../components/ProductCard';
import FeatureSection from '../components/helpline';


const Home = () => {
    const products = [
        {
          image: 'https://ramrajcotton.in/cdn/shop/files/ECOM02468.jpg?v=1723886019&width=1000',
          title: 'Silk Cotton Shirt',
          price: 699,
          rating: 5.0,
        },
        {
          image: 'https://ramrajcotton.in/cdn/shop/files/03_e9854796-e6fe-4ae6-a855-1bc8d65af196.jpg?v=1698812534&width=800',
          title: 'Boys Double Layer Dhoti',
          price: 459,
          rating: 4.0,
        },
        {
          image: 'https://ramrajcotton.in/cdn/shop/files/230513_ECOM_RAMRAJKIDS-0_122.jpg?v=1723879151&width=800',
          title: 'fullsleeves',
          price: 490.99,
          rating: 5.0,
        },
        {
            image :"https://ramrajcotton.in/cdn/shop/files/240720_RAMRAJKIDS_E-COM0292.jpg?v=1722923249&width=1000",
            title: 'Boys Shirt & Dhoti Sets Swayamvara Copper',
            price: 670,
            rating: 4.0,

        },
        {
           image:"https://ramrajcotton.in/cdn/shop/files/Grey2_baabc695-819d-4721-8c97-10598a72c57d.jpg?v=1714640413&width=800",
           title : "100% Cotton Boys Bath Towel",
           price : 500,
           rating : 4.0
        },
        {
            image :"https://ramrajcotton.in/cdn/shop/files/P4A5162.jpg?v=1696586919&width=1000",
            title :"Cotton Maroon Kurta with Cream Elastic Panchakacham Towel Combo",
            price:800.00,
            rating: 4.9
        }

    
      ];
    return (
        <div>
           <CustomNavbar/>
           <br></br> <br></br> <br></br> 
            <HeroSection />
            <ProductList /> 
            <ProductGrid products={products} />
            <Accessories/>
            <FeatureSection/>
            <br></br>
            <Footer />
        </div>
    );
};

export default Home;
