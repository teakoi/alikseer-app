import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Productpage from "./Productpage";
import Header from "./Header";
import Homepage from "./Homepage";

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
                <h2>Customer Rewviews</h2>
                {/* <h2>Read Our Reviews:</h2>


                <div class="review">
                    <p>
                        <span class="customer-name">Mark Markson</span>
                        "Alikseers potions are the best of the best! They're priced well, arrive fast, and they work great. Can't recommend them enough!"
                        <p class="rating">⭐⭐⭐⭐⭐</p>
                    </p>
                </div>


                <div class="review">
                    <p>
                        <span class="customer-name">Eliza Elizine</span>
                        "The best potion store on the market, hands down. Once I tried these elixirs I couldn't go anywhere else. I can't imagine my life without them!"
                        <p class="rating">⭐⭐⭐⭐⭐</p>
                    </p>
                </div> */}

            </section>

        </main>


    );
}


export default HomeMainSection;
