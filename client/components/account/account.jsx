import React from 'react';

const Account = (props) => {
  return (
    <div className="v_account-section">
      <div className="v_account-section__holder">
        <div className="v_account-section__button">
          <p className="v_account-section__initial-text">Hello, Sign in</p>
          <div className="v_account-section__arrow-container">
            <p className="v_account-section__secondary-text">Account &amp; Lists</p>
            <i className="arrow-down" />
          </div>
        </div>
      </div>
      <div className="v_account-section__holder">
        <div className="v_account-section__button">
          <p className="v_account-section__secondary-text">Orders</p>
        </div>
      </div>
      <div className="v_account-section__holder">
        <div className="v_account-section__button v_account-section__arrow-container">
          <p className="v_account-section__secondary-text">Try Prime</p>
          <i className="arrow-down" />
        </div>
      </div>
      <div className="v_account-section__holder">
        <div className="v_account-section__button">
          <div className="v_account-section__cart">
            <div className="v_account-section__cart--image-container">
              <p className="v_account-section__cart--count">0</p>
              <img
                className="v_account-section__cart--image"
                src="images/cart.png"
                alt="cart icon"
              />
            </div>
            <p className="v_account-section__cart--text">Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
