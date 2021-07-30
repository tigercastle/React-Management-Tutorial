import { TableRow } from '@material-ui/core';
import React from 'react';
// import CustomerInfo from './CustomerInfo';
// import CustomerProfile from './CustomerProfile';

// import { Table } from '@material-ui/core/Table';
// import { TableHead } from '@material-ui/core/TableHead';
// import { TableBody } from '@material-ui/core/TableBody';
import { TableCell } from '@material-ui/core';

class Customer extends React.Component{
    render(){
        return (
               <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src={this.props.image} alt = "profile"/></TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.birthday}</TableCell>
                    <TableCell>{this.props.gender}</TableCell>
                    <TableCell>{this.props.job}</TableCell>
               </TableRow>
        )
    }
}


export default Customer;