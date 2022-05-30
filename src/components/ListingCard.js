import React, {useState} from "react";

function ListingCard({id, description,image,location, deleteListing}) {
  const [isFavorite, setIsFavorite]= useState(true)

  function handleFavoriteToggle(){
    setIsFavorite((isFavorite) => isFavorite = !isFavorite)
  }
  function handleDeleteClick(){
      deleteListing(id)
  }

  return (
    <li className="card">
      <div className="image"> 
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite? (
          <button onClick={handleFavoriteToggle} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteToggle} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
