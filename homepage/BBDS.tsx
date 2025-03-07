import React from 'react';
import './style.css'; 

function BBDS(){
    return (
        <div>
            
            <section class="section-5">
                <div class="container-5">
                <article class="bbds">
                    <div class="section-5-title">
                    <h2>BROWSE BY DRESS STYLE</h2>
                    </div>
                    <div class="dress-styles">
                    <div class="style-casual">
                        <h3>Casual</h3>
                        <img
                        src="./assets/bbds-Casual.png"
                        alt="casual"
                        class="fit-img"
                        />
                    </div>
                    <div class="style-formal">
                        <h3>Formal</h3>
                        <img
                        src="./assets/bbds-Formal.png"
                        alt="formal"
                        class="fit-img"
                        />
                    </div>
                    <div class="style-party">
                        <h3>Party</h3>
                        <img
                        src="./assets/bbds-Party.png"
                        alt="party"
                        class="fit-img"
                        />
                    </div>
                    <div class="style-gym">
                        <h3>Gym</h3>
                        <img src="./assets/bbds-Gym.png" alt="gym" class="fit-img" />
                    </div>
                    </div>
                </article>
                </div>
            </section>

        </div>
    )
}

export default BBDS ;