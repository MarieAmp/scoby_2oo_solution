import React from "react";
import "../styles/ItemDisplay.css";

const ItemDisplay = ({ item, handleClose }) => {
  console.log(item);
  return (
    <div className="Item-container">
      <p onClick={handleClose} className="close-link">
        Close
      </p>
      <div className="round-image">
        <img className="user-img" src={item.image} alt="item" />
      </div>
      <h2 className="title">{item.name}</h2>
      <div className="info">
        <span>Quantity: {item.quantity}</span> |<span>{item.category}</span>
      </div>
      <p className="description">{item.description}</p>
      <p className="location">{item.location.formattedAddress}</p>
      <div className="user-info">
        <div className="round-image-user">
          <img src={item.id_user.profileImg} alt="user" />
        </div>
        <span>Given away by {item.id_user.firstName}</span>
      </div>
      <div className="contact-information">
        Contact {item.id_user.firstName} at <b>marker.properties.contact</b>
      </div>
    </div>
  );
};

export default ItemDisplay;