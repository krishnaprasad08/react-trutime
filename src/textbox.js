import React, { Component } from 'react';
import './textbox.css';
import Text from './text.js';
import Option from './option.js';
class TextBox extends Component {
    render() {
        return (
            <span>
                <span className="Text1">
                    <Text list="krishna" className="a" />
                    <datalist id="krishna">
                        <Option value="1000001345" />
                        <Option value="1000001345" />
                        <Option value="1000001345" />
                        <Option value="1000001345" />
                        <Option value="1000001345" />
                        <Option value="1000001345" />
                    </datalist>

                </span>
             

                <span className="Text6">
                    PayPalRampUp
                </span>
                <span className="Text2">
                    <Text list="hhh" className="c" />
                    <datalist id="hhh">
                        <Option value="1000001345" />
                        <Option value="1000001345" />
                        <Option value="1000001345" />
                        <Option value="1000001345" />
                    </datalist>
                </span>
                <span className="Text3">
                    <Text list="ppp" className="d" />
                    <datalist id="ppp">
                        <Option value="1000001345" />
                        <Option value="1000001345" />
                        <Option value="1000001345" />
                        <Option value="1000001345" />
                    </datalist>

                </span>
                <span className="Text4">
                    <Text list="mm" className="e" />
                    <datalist id="mm">
                        <Option value="1000001345" />
                        <Option value="1000001345" />
                        <Option value="1000001345" />
                    </datalist>

                </span>
                <span className="Text5">
                    <Text list="nn" className="f" />
                    <datalist id="nn">
                        <Option value="1000001345" />
                        <Option value="1000001345" />
                        <Option value="1000001345" />
                    </datalist>
                </span>
            </span>
        );

    }
}
export default TextBox;