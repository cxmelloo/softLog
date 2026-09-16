import Hero from "../components/Hero";
import Products from "../components/Products";
import Review from "../components/Review";
import Listings from "../List/Listings";

function Blog() {
  return (
    <>
    <Hero 
      title='This is a blog overview title' 
      desc="You will be overwhelmed by the choices of software available on the market these days. One helpful resource is a software review blog, which provides detailed reviews and recommendations to make it easier for you to find the right software for your need."/>
    <Listings/>
    <Review/>
    <Products/>
    </>
  )
}

export default Blog