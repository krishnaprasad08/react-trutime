import React, { Component } from 'react';
import TextBox from './textbox.js';
import Tab from './tab.js';
import Tab1 from './tab1.js';
import './swipe.css';
class Swipe extends Component {
    render() {
        return (
            <div id="swipes">
                <div className="lefts">

                    <TextBox />

                    <div className="part2">
                        <a href="#">TruTime</a>
                        <span className="TopUp">TopUp Hours</span>
                    </div>
                </div>
                <div className="Rights">
                    <div>
                        <Tab1 />
                        <Tab1 />
                        <Tab />
                        <Tab />
                        <Tab />
                        <Tab />
                        <Tab />
                    </div>
                    <div>
                        <Tab1 />
                        <Tab1 />
                        <Tab />
                        <Tab />
                        <Tab />
                        <Tab />
                        <Tab /></div>


                </div>
                <div className="borderline"></div>

            </div>

        );
    }
}
export default Swipe;