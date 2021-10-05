import React from 'react';
import './Book.css'

const Book = (props) => {
    return ( 
        <div className="book">
            <div className="cover">
            <h1 className="title">{props.books.title}</h1>
            <h4 className="author">{props.books.author}</h4>
            </div>
        </div>
     );
}

export default Book;