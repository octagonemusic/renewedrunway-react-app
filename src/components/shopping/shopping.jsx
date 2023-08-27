import React, { useState } from "react";
import "./shopping.css";

function Shopping() {
  // Define your item data here
  const itemsData = {
    item1: {
      id: 1,
      title: "T shirt",
      image: "/items/item1.svg",
    },
    item2: {
      id: 2,
      title: "Shoulder Bag",
      image: "/items/bag.png",
    },
    item3: {
      id: 3,
      title: "Shirt",
      image: "/items/Rectangle 5.png",
    },
    item4: {
      id: 4,
      title: "Jacket",
      image: "/items/Rectangle 7.png",
    },
  };

  // Define state to track which item is selected
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to open the popup when an item is clicked
  const handleItemClick = (itemId) => {
    setSelectedItem(itemsData[itemId]);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container shopping flex-row">
      {/* Popup for displaying item details */}
      {selectedItem && (
        <div className="popup flex-col">
          <div className="popup-content flex-row">
            {/* 
            
            <img src={selectedItem.image} alt={selectedItem.title} /> */}
            {/* Add more item details here */}
            <button className="close-button" onClick={handleClosePopup}>
              <i class="fa-solid fa-xmark"></i>
            </button>

            <div className="image-container">
              <img src={selectedItem.image} alt={selectedItem.title} />
            </div>
            <div className="content-container">
              <div className="title">
                <h2>{selectedItem.title}</h2>
              </div>
              <div className="des">
                <h4 className="title">PRODUCT DESCRIPTION</h4>
                <div className="des-container">
                  <span className="content">
                    <h6>Composition:</h6>
                    <ul>
                      <li>60% recycled cotton</li>
                      <li>40% lyocell</li>
                    </ul>
                  </span>
                  <span className="content">
                    <h6>Specific care instructions:</h6>
                    <ul>
                      <li>
                        Use cold water and gentle washing to prevent shrinkage
                        and decolourisation.
                      </li>
                      <li>
                        Use mild detergent as they might damage the soft cotton
                        fibres.
                      </li>
                      <li>Avoid high heat or ironing directly.</li>
                      <li>
                        Sun dry laying flat or hanging. Avoid using dryer to
                        prevent damage.
                      </li>
                    </ul>
                  </span>
                  <span className="content">
                    <h6>Care:</h6>
                    <ul>
                      <li>Do not hot wash</li>
                      <li>Do not bleach</li>
                      <li>Do not use dryer</li>
                      <li>Do not dry clean</li>
                      <li>Do not tumble dry</li>
                    </ul>
                  </span>
                </div>
                <h4 className="title">SIZE</h4>
                <div className="size-selector flex-row">
                  <div className="item active">S</div>
                  <div className="item">M</div>
                  <div className="item">L</div>
                  <div className="item">XL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="left-nav flex-col">
        <div className="selector flex-row">
          <div className="item active">Mens</div>
          <div className="item">Womens</div>
        </div>
        <div className="nav-section">
          <ul>
            <li>
              <img src="/star.svg" alt="" />
              <span>New Arrivals</span>
            </li>
            <li>
              <img src="/shirt.svg" alt="" />
              <span>T-shirt</span>
            </li>
            <li className="active">
              <img src="/trousers.svg" alt="" />
              <span>Trousers</span>
            </li>
            <li>
              <img src="/shoes.svg" alt="" />
              <span>Shoes</span>
            </li>
            <li>
              <img src="/accessories.svg" alt="" />
              <span>Accessories</span>
            </li>
            <li>
              <img src="/household.svg" alt="" />
              <span>Household Accessories</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="content-container">
        <div className="items">
          {/* Render items from your data */}
          {Object.keys(itemsData).map((itemId) => (
            <div
              key={itemId}
              className="item flex-row"
              onClick={() => handleItemClick(itemId)} // Open popup on click
            >
              <img
                src={itemsData[itemId].image}
                alt={itemsData[itemId].title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shopping;
