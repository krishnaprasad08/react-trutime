import React, { Component } from 'react';
class Anchor extends Component
{
    render()
    {
        return(

        <a href="#" value={this.props.value}/>

        );
    }
}
export default Anchor;