import React, { Component } from 'react'
class Footer extends Component {
    render() {
        return (

            <footer>
                <span className="Fb">ebay</span>

                
                <span className="Fbusiness"> for business</span>
                   
                    <span className="copyright"> © ebay 2017 </span>
            

              <div className="TandC"><a className="term" href="javascript:void(0)"> Terms&Conditions </a> <span>|</span><a className="cond" href="javascript:void(0)">PrivacyPolicy </a> </div>
            </footer>


        );
    }


}
export default Footer;


/*import React, { Component } from 'react';
class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }
    componentDidMount() {

        fetch("http://api.fixer.io/latest")
            .then((Response) => Response.json())
            .then((findresponse) => {
                this.setState({data : findresponse},() => {
                    console.log(findresponse)
               
                    })
                
            })
    }

    render() {
        //const { data = []}o
       // const {data} =this.state;
        const trows = [];
        var i =0;
        //this.state.data.map((val,i) => {trows.push(<tr key={i}><td>{val["currency"]}</td><td>{val["rate"]}</td></tr>)})
         for(var o in this.state.data.rates){
             i++;
            trows.push(<tr><td>{o}</td><td>{this.state.data.rates[o]}</td></tr>)
         }
             
        return (
            <table>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>rate</th>
                    </tr>
                    {
                        trows
                    }
                </thead>
            </table>
       );
    }
}
export default List;
*/
