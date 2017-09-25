import React, { Component } from 'react';
import Button from './button/button';
import TextBox from './Textbox/textbox';
import Footer from './footer'
import Output from './output/output';
class Container extends Component {
    constructor() {
        super();
        this.state = {
            data: [''],
            dummy: ['']
        }
        this.click = this.click.bind(this);
    }
    componentDidMount() {
        fetch("http://demo8329762.mockable.io/krishna")
            .then((Response) => Response.json())
            .then((findResponse) => {
                this.setState({ data: findResponse })
                console.log(findResponse)
            }
            )

    }

    click() {

        this.setState({ dummy: this.state.data });

    }

    render() {
        return (
            <div>

                <div className="outer">

                    <fieldset>
                        <div className="left">
                            <h3>Change Password</h3>
                            <p>First time users, please change the password on login </p>
                            <TextBox type="password" placeholder="OldPassword" value={this.state.dummy.OldPassword} />
                            <TextBox type="password" placeholder="NewPassword" value={this.state.dummy.NewPassword} />
                            <TextBox type="text" placeholder="Re-EnterNewPassword" value={this.state.dummy.NewPassword} />

                            <Button click={this.click} />
                            <a href="javascript:void(0)" >Cancel </a>
                        </div>
                        <div className="Right">

                            <ul>
                                <li>Special characters such as @ # $ % are not allowed </li>
                                <li>Password should alphanumeric with specific characters <br />such as -+ =</li>
                                <li>It should minimum 8 characters in length</li>
                            </ul>
                        </div>
                    </fieldset>

                    <Footer />


                </div>

            </div>
        );
    }
}
export default Container;