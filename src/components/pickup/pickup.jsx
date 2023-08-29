import React, { useState } from "react";
import "./pickup.css";

function Item({ label }) {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      // Clear the input value when enabling the checkbox
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="item flex-row">
      <input
        type="checkbox"
        name="select"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label>{label}</label>
      <div className="text-input">
        <input
          className={!isChecked && "disable"}
          type="number"
          name="weight"
          placeholder="WEIGHT(KG)"
          disabled={!isChecked}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

const Pickup = () => {
  return (
    <div className="container pickup flex-col">
      <div className="main flex-col">
        <h1 className="header">DONATE</h1>
        <span className="header-bottom">for the betterment of the world</span>
        <span className="des">
          Help us reduce the waste from landfills and get it to good use
        </span>
      </div>
      <div className="fabric flex-col">
        <h1 className="header">Fabric</h1>
        <div className="content">
          <Item label={"Cotton"} />
          <Item label={"Wool"} />
          <Item label={"Nylon"} />
          <Item label={"Rayon"} />
          <Item label={"Polyester"} />
          <Item label={"Leather"} />
          <Item label={"Silk"} />
          <Item label={"Denim"} />
          <Item label={"Any other(Please specity)"} />
        </div>
        <div className="message">
          <textarea
            name=""
            id=""
            placeholder="Please describe the condition of the fabric......."
          ></textarea>
        </div>
      </div>
      <div className="bookup flex-row">
        <div className="form">
          <h2 className="form-header">Pickup Address</h2>
          <form action="#">
            <div className="flex-row">
              <div className="input-warpp">
                <label htmlFor="Firstname">First Name</label>
                <input type="text" name="name" id="Firstname" />
              </div>
              <div className="input-warpp">
                <label htmlFor="LastName">Last Name</label>
                <input type="text" name="name" id="LastName" />
              </div>
            </div>
            <div className="flex-row">
              <div className="input-warpp">
                <label htmlFor="StreetAddress">Street Address</label>
                <input type="text" name="name" id="StreetAddress" />
              </div>
            </div>
            <div className="flex-row">
              <div className="input-warpp">
                <label htmlFor="PostalCode">Postal Code</label>
                <input type="text" name="name" id="PostalCode" />
              </div>
              <div className="input-warpp">
                <label htmlFor="TownCity">Town/City</label>
                <input type="text" name="name" id="TownCity" />
              </div>
            </div>
            <div className="flex-row">
              <div className="input-wrapp">
                <label htmlFor="phoneNo">Phone Number</label>
                <input type="text" name="phoneNo" id="phoneNo" />
              </div>
              <div className="input-wrapp submit">
                <input type="submit" value="Book Pickup" />
              </div>
            </div>
          </form>
        </div>
        <div className="note flex-col">
          <h3 className="title">FREE RUG !!!</h3>
          <span className="title-des">
            Get a Tote-bay FREE by just donating clothes !!!
            <br />
            <br/>
            Get a Rug FREE if you donate more than 10 kg of clothes
          </span>
          <h4 className="title">Note</h4>
          <span className="des">
            The fabric will be picked up after inspection by the pickup agent.
            If not usable, we'll be happy to dispose it off for you <br />
            {":)"}
          </span>
          <p>*Terms and conditions apply</p>
        </div>
      </div>
    </div>
  );
};

export default Pickup;
