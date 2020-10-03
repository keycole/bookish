import React from "react";

function SearchForm() {
    return (
        <div>
            <form class="form-inline">
                <label class="sr-only" for="inlineFormInputName2">Title</label>
                <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Enter a book title." />

                <button type="submit" class="btn btn-primary mb-2">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;