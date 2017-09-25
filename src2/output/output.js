import React, { Component } from 'react';

import './output.css'
class Output extends Component {
    
    
    render() {
        return (
            <div className="final">
                <label >OldPAssword: {this.props.value[0]}</label><br/>
                <label >NewPAssword: {this.props.value[1]}</label><br/>
                <label >Re-EnterPassword: {this.props.value[2]}</label>
            </div>

        );

    }
}
export default Output;