import React, { Component } from 'react';

export default class NoteEditor extends Component {
  state = {
    text: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ text: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.noteAdd(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 600,
          padding: 16,
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow:
            '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
        }}
        onSubmit={this.handleSubmit}
      >
        <textarea
          rows="6"
          style={{ resize: 'none', marginBottom: 16, font: 'inherit' }}
          value={text}
          onChange={this.handleChange}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}
