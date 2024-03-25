import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Productpage from "./Productpage";
import Header from "./Header";
import Homepage from "./Homepage";
import reviews from 


function HomeMainSection(){
    return(
        <main>
            
            <section class = "about-us">
                
                <h2>About Us:</h2>
                <p> Derived from the Arabic word <i>al-iksir</i>, which is the origin of the term "elixir", Alikseer 
                    offers a curated collection of potions crafted with care and careful alchemical engineering.<br />
                    Elixirs are substances with mystical properties, believed to hold transformative powers.
                    Let us <i>transform</i> your problems into solutions!</p>
                
            </section>


            <section class="shop-now">
                <Link to="/Productpage"><button class="shop-now-btn">Shop Now!</button></Link>
            </section>


 
            <section class="customer-reviews">
                <h2>Customer Reviews</h2>
            </section>

        </main>


    );
}


export default HomeMainSection;
