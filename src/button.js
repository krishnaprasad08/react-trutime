import React, { Component } from 'react';
import './button.css';
class Button extends Component
{
    render()
    {
        return(
            <button onClick={this.props.click} >SUBMIT</button>

        );
    }
}
export default Button;


