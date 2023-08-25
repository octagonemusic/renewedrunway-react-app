import React from "react";
import "./shopping.css"

function Shopping() {
  return (
    <div className="container shopping flex-row">
      <div className="left-nav flex-col">
        <div className="selector flex-row">
          <div className="item active">Mens</div>
          <div className="item">Womens</div>
        </div>
        <div className="nav-section">
          <ul>
            <li>
              <img src="/public/star.svg" alt="" />
              <span>New Arrivals</span>
            </li>
            <li>
              <img src="/public/shirt.svg" alt="" />
              <span>T-shirt</span>
            </li>
            <li className="active">
              <img src="/public/trousers.svg" alt="" />
              <span>Trousers</span>
            </li>
            <li>
              <img src="/public/shoes.svg" alt="" />
              <span>Shoes</span>
            </li>
            <li>
              <img src="/public/accessories.svg" alt="" />
              <span>Accessories</span>
            </li>
            <li>
              <img src="/public/household.svg" alt="" />
              <span>Household Accessories</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="content-container">
        <div className="items">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
}

export default Shopping;
