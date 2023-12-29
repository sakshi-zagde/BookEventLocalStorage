
import React, { useState } from 'react';
import './styles.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import AddCustomer from './components/AddCustomer';




const Home: React.FC = () => {
 
  const [buttonsClicked, setButtonsClicked] = useState(false);

  const handleButtonClick = () => {
    // Set state to indicate that buttons have been clicked
    setButtonsClicked(true);
  };

  return (
      <Router>
        <div className="containerbottle">
          {/* Conditionally render the image and buttons based on the state */}
          {!buttonsClicked && (
            <>
                <h1><strong>Event Booking System</strong></h1>

              <img
                className="full-width-image"
                src="https://www.shutterstock.com/image-photo/happy-african-american-young-employee-600nw-1575620572.jpg"
                alt="Event Background"
              />
              <div>
                <nav>
                
                     <div>

                     <button onClick={handleButtonClick}>
                        <Link to="/add-customer">BOOK EVENT</Link>
                      </button>
                      
                     <button onClick={handleButtonClick}>
                        <Link to="/CustomerList">SHOW ALL BOOKINGS</Link>
                      </button>
                  
                   
                     </div>
               
                </nav>
              </div>
            </>
          )}

         
          <Routes>
            <Route path="/add-customer" element={<AddCustomer />} />
            <Route path="/CustomerList" element={<CustomerList />} />
          </Routes>
        </div>
      </Router>
  
  );
};

export default Home;
