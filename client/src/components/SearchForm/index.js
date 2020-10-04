import React from "react";

function SearchForm() {
    return (
        <form>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search for a book title." aria-label="Book title search field" aria-describedby="basic-addon2" />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
        </div>
        </form>
    )
}

export default SearchForm;