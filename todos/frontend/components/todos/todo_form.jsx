import React from 'react';
import {uniqueId} from '../../util/utils';

export class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      id: ""
    };
    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputBody = this.handleInputBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputTitle(e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  handleInputBody(e) {
    e.preventDefault();
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger;
    // const id = uniqueId();
    this.props.receiveTodo({title: this.state.title,
      body: this.state.body,
      id: uniqueId()
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.title} onChange={this.handleInputTitle}></input>
        <input value={this.state.body} onChange={this.handleInputBody}></input>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }




}
