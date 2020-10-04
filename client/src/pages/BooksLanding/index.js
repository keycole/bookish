import React from "react";
import Header from "../../components/Header"
import "./styles.css";

function BookLanding() {
    return (
        <div>
            <Header />
            <div className="contentContainer">
                <h1>Saved Books</h1>
            <div className="bookWrapper">
                <div className="row">
                    <div className="wideColumn" >
                    <h2>Title Here</h2>
                    </div>
                    <div className="column">
                        <button id="inlineButtonLeft">View</button>
                        <button id="inlineButtonRight">Delete</button>
                    </div>
                </div>
                <div className="row">
                    Subtitle Here
                </div>
                <div className="row">
                    Author Here
                </div>
                <div className="row">
                    <div className="column" id="bookImage">
                        Image Here
                    </div>
                    <div className="column" id="bookDescription">
                        Book description here.
                    </div>
                </div>
            </div>
            <div className="bookWrapper">
                <div className="row">
                    <div className="wideColumn" >
                        <h2>Title Here</h2>
                    </div>
                    <div className="column">
                        <button id="inlineButtonLeft">View</button>
                        <button id="inlineButtonRight">Delete</button>
                    </div>
                </div>
                <div className="row">
                    Subtitle Here
                </div>
                <div className="row">
                    Author Here
                </div>
                <div className="row">
                    <div className="column" id="bookImage">
                        Image Here
                    </div>
                    <div className="column" id="bookDescription">
                        Book description here.
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default BookLanding;