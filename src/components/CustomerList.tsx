
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../rootReducer';
import './CustomerList.scss';

const CustomerList: React.FC = () => {
  const customers = useSelector((state: RootState) => state.customers);

  return (
    <div className='tablecontainer'>
      
            <h2>BOOKING DETAILS</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Type of Event</th>
            <th>Event Date</th>
            <th>Attendees</th>
            <th>Food </th>
            <th>AV Services</th>
            <th>Additional Information</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.email}</td>
              <td>{customer.phoneNumber}</td>
              <td>{customer.eventType}</td>
              <td>{customer.eventDate}</td>
              <td>{customer.attendees}</td>
              <td>{customer.foodServices}</td>
              <td>{customer.avServices}</td>
              <td>{customer.additionalInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
