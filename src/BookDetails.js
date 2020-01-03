import React from "react";

function BookDetails(props) {
  return (
    <div className="book">
      <h3>Book {props.number}</h3>
      <h2>{props.name}</h2>

      <div className="details">
        <p>
          <strong>Author</strong>: {props.authors}
        </p>
        <p>
          <strong># of Pages</strong>: {props.numberOfPages}
        </p>
        <p>
          <strong>Country</strong>: {props.country}
        </p>
        <p>
          <strong>Release Date</strong>: {props.releaseDate}
        </p>
      </div>
    </div>
  );
}

export default BookDetails;
