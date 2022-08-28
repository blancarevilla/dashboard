import React from "react";

function ChartRow (props) {
return(

    <React.Fragment>

        <tr>
        <td>{props.id}</td>
        <td>{props.first_name}</td>
        <td>{props.email}</td>
        <td>{props.detail}</td> 
        </tr>


    </React.Fragment>


)
}

export default ChartRow