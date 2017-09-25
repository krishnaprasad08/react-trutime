import React,{ Component } from 'react'
import './button.css';
class Button extends Component {
   
   
    
    render() {
        return (
            <span>

                <button onClick={this.props.click} > SUBMIT </button>
             

            </span>

        );
    }

}
export default Button;