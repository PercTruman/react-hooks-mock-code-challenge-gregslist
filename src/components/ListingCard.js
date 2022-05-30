import React, {useState} from "react";

function ListingCard({description,image,location}) {
  const [isFavorite, setIsFavorite]= useState(true)

  function handleFavoriteToggle(){
    setIsFavorite((isFavorite) => isFavorite = !isFavorite)
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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
