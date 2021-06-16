import { Component } from 'react';

class BookmarkItem extends Component {

  render() {
    const bookmark = this.props.bookmarks;

    return(
      <li key={bookmark.url}>
      <h2>{bookmark.url}</h2>
      <p>{bookmark.title}</p>
      <p>{bookmark.tag}</p>
      </li>
    )
  }
}


export default BookmarkItem
