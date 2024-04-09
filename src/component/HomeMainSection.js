import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Productpage from "./Productpage";
import Header from "./Header";
import Homepage from "./Homepage";
import reviews from  "../data/reviews"; //Import the reviews array
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";


const HomeMainSection = () =>{
    const [DisplayedReviews, setDisplayedReviews] = useState([]);

    useEffect(() =>{
        const getDisplayedReviews = () => {
            const shuffledReviews = [...reviews].sort(()=> 0.5 - Math.random()); //shuffle reviews
            const selectedReviews = shuffledReviews.slice(0,2); // select 2 reviews
            setDisplayedReviews(selectedReviews);
        };
        getDisplayedReviews(); //Call the function to select random reviews
    }, []);

    // Function to render star icons based on the number of stars
    const renderStars = (stars) => {
        const starIcons = [];
        for (let i = 0; i < stars; i++) {
            starIcons.push(<FontAwesomeIcon key={i} icon={faStar}/>);
        }
        return starIcons;
    };


    return(
        <main>
            
            <section className = "about-us">
                
                <h2>About Us:</h2>
                <p> Derived from the Arabic word <i>al-iksir</i>, which is the origin of the term "elixir", Alikseer 
                    offers a curated collection of potions crafted with care and careful alchemical engineering.<br />
                    Elixirs are substances with mystical properties, believed to hold transformative powers.
                    Let us <i>transform</i> your problems into solutions!</p>
                
            </section>


            <section className="shop-now">
                <Link to="/products"><button className="shop-now-btn">Shop Now!</button></Link>
            </section>


 
            <section className="customer-reviews">
                <h2>Customer Reviews</h2>
                {DisplayedReviews.map((review, index) => (
                    <div key={index} className="review">
                        <p>{review.customerName}</p>
                        <p>{review.reviewContent}</p>
                        <p>Rating: {renderStars(review.stars)}</p>
                    </div>
                ))}
            </section>

        </main>
    );
}


export default HomeMainSection;
