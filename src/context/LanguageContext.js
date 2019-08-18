import React from 'react';

// Context with uppercase 'C' because
// it must be just like any other Component
// If lowercase 'c', then react assumes it is
// an HTML tag of sorts
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
