import React, { Component } from 'react';
import './container.css';
import Tabledata from './submittable';
import DropdownList from './dropdownlist';
import TextBox from './textbox.js';
import Tab from './tab.js';
import Anchor from'./anchor.js';
import Swipe from './swipehours.js';
import Holiday from './holiday.js';
import Button from './button.js';
class FullContainer extends Component {
    constructor(){
        super();
    }
    render() {
        return (


            <div id="Outer">

                <fieldset>
                    <h2>
                        Time Report
        </h2>
                    <div className="first">
                        <span className="name">Krishna Id</span>
                        <span className="TimeReport">Time Report Id</span>
                    </div>
                    <div className="Second">
                        <span>Period End Date:06/30/2017</span>
                        <span>version:original</span>
                    </div>

                    <Tabledata />
                    <Swipe reports={this.props.reports}/>
                   
                    <Holiday/>
                    <Button/>
 
  
      


                </fieldset>
            </div>




        );
    }
}
export default FullContainer;