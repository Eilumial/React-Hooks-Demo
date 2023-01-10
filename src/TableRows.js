import React from "react";

const TableRows = (props) => {
    return (
        <>
        <tr>
            <td className="test">{props.it.title}</td>
        </tr>
        </>

    );
}

export default TableRows;