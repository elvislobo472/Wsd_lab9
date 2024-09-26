import React, { useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=rATfbsGDI3z6YPuiNzt4KQYrQjiAOXMP'
      );
      setBooks(response.data.results.books); // Accessing the books array in results
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2 style={{ fontFamily: "sans-serif" }}>Book Gallery</h2>
      <button onClick={fetchBooks} style={{ padding: '10px', marginBottom: '20px', backgroundColor:'lightgreen' , border:'0px', borderRadius:'10px'}}>
        Fetch Books
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'lightgreen', justifyContent: "space-evenly" }}>
        {books.map((book) => (
          <div key={book.primary_isbn10} style={{ margin: '10px', textAlign: 'center', backgroundColor:'white' , padding:"20px", borderRadius:"10px"}}>
            <img
              src={book.book_image}
              alt={book.title}
              style={{ width: '200px', height: '300px', borderRadius:"10px" }}
            />
            <p style={{ fontFamily:"sans-serif" }}>{book.title}</p>
            <p style={{ color: "grey", fontFamily: 'sans-serif' }}>{book.author}</p>
            <a href={book.amazon_product_url} target="_blank" rel="noopener noreferrer">
              Buy on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
