import React from 'react';

const TRCard = (props) => {
    return(
        <tr>
            <td>{props.report.periodEndDate}</td>
            <td>{props.report.reportId}</td>
            <td>{props.report.empId}</td>
            <td>{props.report.empName}</td>
            <td>{props.report.status}</td>
            <td>{props.report.creationDate}</td>
            <td>
                <button onClick={() => props.updateStatus(props.report.reportId,"Approved")} disabled={props.report.status !== 'Pending'}>Approve</button>
                <button onClick={() => props.updateStatus(props.report.reportId,"Rejected")} disabled={props.report.status !== 'Pending'}>Reject</button>
            </td>
        </tr>
    )
}

export default TRCard;