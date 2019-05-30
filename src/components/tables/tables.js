import React from 'react';

import './tables.css';

function Tables(props) {
    const showData = Object.keys(props.data).map((element, key) => {
        
            if(props.title ===  'districts') {
                return (
                    <tr key={key}>
                        <td>{props.data[element].codeDistrict}</td>
                        <td>{props.data[element].nameDistrict}</td>
                        <td>{props.data[element].codeProvince}</td>
                        <td>{props.data[element].nameProvince}</td>
                    </tr>
                )
            } else if (props.title ===  'provinces') {
                return (
                    <tr key={key}>
                        <td>{props.data[element].codeProvince}</td>
                        <td>{props.data[element].nameProvince}</td>
                        <td>{props.data[element].codeDepartment}</td>
                        <td>{props.data[element].nameDepartment}</td>
                    </tr>
                )
            } else {
                return (
                    <tr key={key}>
                        <td>{props.data[element].codeDepartment}</td>
                        <td>{props.data[element].nameDepartment}</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                )
            }
    })
    return (
        <div>
            <h1>{props.title}</h1>
            <table className="table" >
                <thead className="table__header">
                    <tr>
                        <th>CODE</th>
                        <th>NAME</th>
                        <th>PARENT CODE</th>
                        <th>PARENT DESCRIPTION</th>
                    </tr>
                </thead>
                <tbody className="table__content">
                    {showData}
                </tbody>
           
            </table>
        </div>
    )
}

export default Tables;