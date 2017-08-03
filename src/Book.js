import React, { Component } from "react";

class Book extends Component {
  render() {
    const { filteredBooks } = this.props;

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {filteredBooks.map(filteredBook => (
            <li key={filteredBook.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${filteredBook.imageLinks.thumbnail})`
                    }}
                  />
                  <div className="book-shelf-changer">
                    <select
                      name="shelf"
                      onChange={e => this.props.onStatusChange(e)}
                    >
                      <option value="none" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">
                        Want to Read
                      </option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">
                  {filteredBook.title}
                </div>
                <div className="book-authors">
                  {filteredBook.authors.join(", ")}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Book;