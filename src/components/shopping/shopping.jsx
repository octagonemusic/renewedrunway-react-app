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
      title: "Sirt",
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
          <button className="close-button" onClick={handleClosePopup}>
            Close
          </button>
          <h2>{selectedItem.title}</h2>
          <img src={selectedItem.image} alt={selectedItem.title} />
          {/* Add more item details here */}
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
