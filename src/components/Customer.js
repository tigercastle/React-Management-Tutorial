import React from 'react';
import CustomerInfo from './CustomerInfo';
import CustomerProfile from './CustomerProfile';

class Customer extends React.Component{
    render(){
        return (
            <div>
               <CustomerProfile 
                 id={this.props.id}
                 image={this.props.image}
                 name={this.props.name}
               />
               <CustomerInfo
                 birthday={this.props.birthday}
                 gender={this.props.gender}
                 job={this.props.job}
               />
            </div>
        )
    }
}


export default Customer;