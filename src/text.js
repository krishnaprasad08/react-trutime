import React, { Component } from 'react';
class Text extends Component
{
        render()
        {
             return(
                  <input list= {this.props.list} className={this.props.className}/>
                      



            
             );
        }
}
export default Text; 