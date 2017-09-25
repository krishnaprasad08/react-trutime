import React, { Component } from 'react'

class Temp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "id": 123,
                "current_over": 20,
                "batting": "x",
                "ball": "y",
                "score": {
                    "total": 100,
                    "lastOver": [1, 2, 0, 4, 0, 1]
                }
            }

        }
    }


    render() {
        const {data} = this.state;
        return (
            <div>
                <label>ID : {data.id}</label>
                <label>Overs : {data.current_over}</label>
                <label>Score : {data.score.total}</label>
                <label>Last Over : <br/>{
                    data.score.lastOver.map((val,i) => val)
                    }</label>
            </div>

        );
    }

}
export default Temp;