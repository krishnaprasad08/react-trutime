import React, { Component } from 'react';
import './dropdownlist.css'
class DropdownList extends Component
{
    render()
    {
        return(

            <span className="textbox">
 <input list="problems" name="dropdown" className="projectID"/>
<datalist id="problems">
 <option value="1000000201"/>
 <option value="1000013945 "/>
 <option value="1000015700"/>
 <option value="1000015701"/>	 
<option value="1000016826 "/>
<option value="1000024498"/>
 <option value="1000024499"/>	 
<option value="1000028295 "/>
<option value="1000095463"/>
 <option value="1000146770 "/>
 <option value="1000044573"/>
 <option value="1000044574"/>
 

</datalist> 
<img src="C:\Users\599480\Desktop\search.gif"/>
    <span>paypalRa</span>
    
    </span>
        );


    }
}
export default DropdownList ;
 