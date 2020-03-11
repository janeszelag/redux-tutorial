import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

//mapDispatchToProps connects Redux actions to React props
function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  //the action is dispatched in the handleSubmit method
  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    this.props.addArticle({ title });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

//Finally the component gets exported as Form. 
//Form is the result of connecting ConnectedForm with the Redux store
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
//Note: the first argument for connect must be null when mapStateToProps is absent.
//Or you'll get TypeError: dispatch is not a function.

export default Form;
