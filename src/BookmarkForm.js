import { Component } from 'react';

class BookmarkForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: '',
      title: '',
      tag: '',
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleInput = this.handleInput.bind(this);
}


  handleInput(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addBookmark(this.state);
    this.setState({url: this.state.url, title: this.state.title, tag: this.state.tag,})
  }

  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <input name="url" type="url" value={this.state.url} onChange={this.handleInput} placeholder="url"/>
      <input name="title" type="text" value={this.state.title} onChange={this.handleInput} placeholder="title"/>
      <input name="tag" type="text" value={this.state.tag} onChange={this.handleInput} placeholder="tag"/>
      <button type="submit">Submit</button>
    </form>

    )
  }
}

export default BookmarkForm
