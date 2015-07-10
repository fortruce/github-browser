import React, { PropTypes, findDOMNode } from 'react';

export default class Search extends React.Component {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  }

  state = {
    input: ''
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13)
      this.submitSearch();
  }

  handleChange = () => {
    this.setState({
      input: this.getInput()
    })
  }

  getInput() {
    return findDOMNode(this.refs.input).value;
  }

  submitSearch() {
    this.props.handleSearch(this.getInput());
    this.setState({ input: '' });
  }

  render() {
    return (
      <input
        className="form-control"
        type="search"
        placeholder={ this.props.placeholder || ''}
        ref="input"
        value={this.state.input}
        onKeyUp={this.handleKeyUp}
        onChange={this.handleChange} />
    );
  }
}