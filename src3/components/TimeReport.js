import React, { Component } from 'react';
import TRCard from './TRCard';
class TimeReport extends Component {
  render() {
    return (
      <div className="timereport">
      <h3>TimeSheet Report</h3>
      <table>
        <thead>
            <tr>
                <th>Period End Date</th>
                <th>Time Report Id</th>
                <th>Employee Id</th>
                <th>Name</th>
                <th>Status</th>
                <th>Creation Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {this.props.reports.map((report,i) => 
                <TRCard key={i} report={report} updateStatus={this.props.updateStatus}/>
            )}
        </tbody>
      </table>
      </div>
    );
  }
}

export default TimeReport;
