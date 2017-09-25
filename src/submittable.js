import React, { Component } from 'react';
import './submittable.css';

class Tabledata extends Component {
    render() {
        return (

            <div className="tab">
                <a href="a" className="tablinks2" >ProjectID</a>
                <a href="b" className="tablinks3" >ProjectName</a>
                <a href="c" className="tablinks4" >Activity</a>
                <a href="d" className="tablinks5" >onsite/Offshore</a>
                <a href="e" className="tablinks6" >billingAction</a>
                <a href="e" className="tablinks7" >Loction</a>

                <a href="f" className="tablinks1" id="kk" >24SAT</a>
                <a href="g" className="tablinks1" id="ll" >25SUN</a>
                <a href="h" className="tablinks1" >26MON</a>
                <a href="i" className="tablinks1" >27TUE</a>
                <a href="j" className="tablinks1" >28WEN</a>
                <a href="k" className="tablinks1" >29THU</a>
                <a href="l" className="tablinks1" >30FRI</a>
            </div>

        );
    }
}

export default Tabledata;

