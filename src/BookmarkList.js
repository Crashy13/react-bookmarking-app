import { Component } from 'react';
import BookmarkItem from './BookmarkItem'

function BookmarkList(props) {

    const bookmarks = props.bookmarks.map((bookmark) => (
        <li key={bookmark.tag}>
          <p>{bookmark.url}</p>
          <p>{bookmark.title}</p>
          <p>{bookmark.tag}</p>
        </li>
      ));

      return(
        <>
          <h2>{bookmarks}</h2>
        </>
      );
}


export default BookmarkList
