import React, {Component} from 'react';
import './textbox.css';
class TextBox extends Component
{
    
    render(){
        return(
            
                    <div><input type={this.props.type} placeholder={this.props.placeholder}
                    value ={this.props.value}  /></div>
            
        );
    }

}
export default TextBox;