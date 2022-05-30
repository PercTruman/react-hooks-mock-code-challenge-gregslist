import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings}) {
  const cards = listings.map((listing)=>
    <ListingCard key={listing.id} id={listing.id}deleteListing={deleteListing} description={listing.description} image={listing.image} location={listing.location} />)

  function deleteListing(id){
    fetch(`http://localhost:6001/listings/${id}`, {
      method:'DELETE',
    })
    .then(res=>res.json())
    .then(()=>{
    const updatedListings=listings.filter((listing) => listing.id !== id)
    setListings(updatedListings)
  })
  }
  return (
    <main>
      <ul className="cards">
        {cards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
