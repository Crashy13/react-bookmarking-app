import { Component } from 'react';
import './App.css';
import BookmarkForm from './BookmarkForm'
import BookmarkList from './BookmarkList'


class Bookmark extends Component {
  constructor(props){
    super(props);
    this.state = {
      bookmarks: [],
  }
  
  this.addBookmark = this.addBookmark.bind(this);
}

  addBookmark(bookmark) {
    const bookmarks = [...this.state.bookmarks];
    bookmarks.push(bookmark);
    this.setState({bookmarks})
  }


  render() {
    return(
    <>
      <BookmarkForm addBookmark={this.addBookmark} />
      <BookmarkList bookmarks={this.state.bookmarks} />
    </>

    )
  }
}


export default Bookmark;
