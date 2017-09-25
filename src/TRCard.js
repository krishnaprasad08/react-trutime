import React from 'react';

class TRCard extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <tr>
                <td>{this.props.report.periodEndDate}</td>
                <td onClick={() =>this.props.cardExpand(this.props.report)} >{this.props.report.reportId}</td>
                <td>{this.props.report.empId}</td>
                <td>{this.props.report.empName}</td>
                <td>{this.props.report.status}</td>
                <td>{this.props.report.version}</td>
                <td>
                    <button onClick={() => this.props.updateStatus(this.props.report.reportId,"Approved")} disabled={this.props.report.status !== 'Pending'}>Approve</button>
                    <button  onClick={() => this.props.updateStatus(this.props.report.reportId,"Rejected")} disabled={this.props.report.status !== 'Pending'}>Reject</button>
                </td>
            </tr>
        )
    }
}

export default TRCard;





