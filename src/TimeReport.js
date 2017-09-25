
import React, { Component } from 'react';
import TRCard from './TRCard';
import './TimeReport.css'
import FullContainer from './container.js';
import Button from './button.js'
class TimeReport extends Component {
    constructor() {
        super();
      this.state={
        formSubmitted : false
      }

        this.click = this.click.bind(this);
    }
    click() {
        this.setState({ formSubmitted : true});
    }

  render() {
    return (
      <div className="timereport">
        
                       {this.state.formSubmitted === false ?  
                       <div>
      <h3 id="heading">Create New Timesheet</h3>
      <h2>Copy from an Existing Time Report</h2>
      <h3 id="Addbutton">KrishnaPrasad</h3>
      <Button click={this.click}/>
      <table>
        <thead>
            <tr>
                <th>Period End Date</th>
                <th>Time Report Id</th>
                <th>Employee Id</th>
                <th>Name</th>
                <th>Status</th>
                <th>version</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {this.props.reports.map((report,i) => 
                <TRCard key={i} report={report} updateStatus={this.props.updateStatus}/>
            )}
        </tbody>
      </table> 
      </div> :
       <FullContainer /> }
      </div>
    );
  }
}

export default TimeReport;
