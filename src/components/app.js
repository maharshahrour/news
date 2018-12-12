import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import NewsList from '../containers/news_list';

export default class App extends Component {
  render() {
    return (
      <div>
      <h3 style={{paddingTop: '3%',textAlign: 'center'}}>Welcome to news website</h3>
        <SearchBar />
        <NewsList />
      </div>
    );
  }
}
