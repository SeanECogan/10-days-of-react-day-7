import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import BookDetails from "./BookDetails";
import ScotchInfoBar from "./ScotchInfoBar";

import "./styles.css";

function App() {
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

  const [books, setBooks] = useState(null);

  const fetchBooks = async () => {
    setBooks(null);

    const response = await axios.get(apiURL);

    const responseBooks = response.data.map((responseBook, index) => {
      return {
        number: index + 1,
        name: responseBook.name,
        authors: responseBook.authors.join(", "),
        numberOfPages: responseBook.numberOfPages,
        country: responseBook.country,
        releaseDate: new Date(responseBook.released).toDateString()
      };
    });

    setBooks(responseBooks);
  };

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      <div>
        <button className="fetch-button" onClick={fetchBooks}>
          Fetch Books
        </button>
        <br />
      </div>

      <div className="books">
        {books &&
          books.map(book => (
            <BookDetails
              key={book.number}
              number={book.number}
              name={book.name}
              authors={book.authors}
              numberOfPages={book.numberOfPages}
              country={book.country}
              releaseDate={book.releaseDate}
            />
          ))}
      </div>

      <ScotchInfoBar seriesNumber="7" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
