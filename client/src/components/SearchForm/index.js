import React, { useState, useEffect } from "react";
import "./styles.css";
import API from "../../utils/API";

function SearchForm() {
    const [bookTitle, setBookTitle] = useState("Yoga");
    const [bookResults, setBookResults] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();
        console.log("The title inside handle submit = ", bookTitle);
        API.getBooks(bookTitle)
            .then((res) => {
                console.log("The res.data.items = ", res.data.items);
                setBookResults(res.data.items);
            })
            .catch((err) => {
                if (err) {
                    console.log("There was an error: ", err);
                }
            })

        console.log("The bookResults state = ", bookResults);
    }

    useEffect(() => {
        API.getBooks(bookTitle)
            .then((res) => {
                console.log("The res.data.items = ", res.data.items);
                setBookResults(res.data.items);
                console.log("The bookResults state = ", bookResults);
            })
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input
                        id="bookTitle"
                        type="text"
                        class="form-control"
                        placeholder="Search for a book title."
                        aria-label="Book title search field"
                        aria-describedby="basic-addon2"
                        onChange={e => { setBookTitle(e.target.value) }} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit">Button</button>
                    </div>
                </div>
            </form>
            <div id="resultsDiv">
                {bookResults.length ? (
                    <div>
                        {bookResults.map(book => {
                            return (
                                <div className="bookWrapper">
                                    <div className="row">
                                        <div className="wideColumn" >
                                            <h2>{book.volumeInfo.title}</h2>
                                        </div>
                                        <div className="column">
                                            <button id="inlineButtonLeft"><a href={book.volumeInfo.infoLink} target="_blank">View</a></button>
                                            <button id="inlineButtonRight">Save</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {book.volumeInfo.subtitle}
                                    </div>
                                    <div className="row">
                                    {/* {(book.volumeInfo.authors[0] !== "") ? (return book.volumeInfo.authors[0]) :(return "") } */}
                                    </div>
                                    <div className="row">
                                        <div className="column" id="bookImage">
                                            <img src={book.volumeInfo.imageLinks.thumbnail}/>
                                        </div>
                                        <div className="column" id="bookDescription">
                                        {book.volumeInfo.description}
                                    </div>
                                    </div>
                                </div>
                            )
                        }
                        )}
                        </div>) : (
                            <div className="bookWrapper">
                                <div className="row">
                                    <h2>No results to show.</h2>
                                </div>
                            </div>
                    )
                }
            </div>
        </div>
    )
}

export default SearchForm;