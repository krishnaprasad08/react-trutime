import React, { Component } from 'react';
import TextBox from './textbox.js';
import Tab from './tab.js';
import Tab1 from './tab1.js';
import './holiday.css';
class Holiday extends Component
{
    render()
    {
        return(
<div className="holi" >
    <div className="leftt">
                   
                  <div className="part3"> 
                      <span>Holiday/TimeOff</span>
                      <span className="holidays">Holiday/(Public/National)</span>
                      </div>
                    
                   <div className="part4">
                       <a href="#">Apply Time Off</a>
                       <span className="TopUp1"> TimeOff</span>
                   </div>
                    </div>
                    <div className="Rightt">
                    <Tab1/>
                    <Tab1/>
                    <Tab/>
                    <Tab/>
                    <Tab/>
                   <Tab/>
                    <Tab/>
                    <Tab1/>
                    <Tab1/>
                    <Tab/>
                    <Tab/>
                    <Tab/>
                   <Tab/>
                    <Tab/>
                    
</div>


               </div>   

        );
    }
}
export default Holiday;