import React, { Component } from 'react';
import axios from 'axios';
// Components
import ImageList from './components/ImageList/ImageList';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {

  state = {
    images: [],
    error: false,
    notFound: false
  };

  componentDidMount() {
    axios.get(`https://api.unsplash.com/photos/?page=1&per_page=50&client_id=e64e1a64c02da5f1479b850a6cc6f21206a96220c1c69c922da9e286254bf6fe`)
        .then( ({ data }) => this.setState({ images: data }))
        .catch(err => this.setState({ error: true }));
  }

  searchHandler = query => { 

    this.setState({ query });

    axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=50&query=${query}&client_id=e64e1a64c02da5f1479b850a6cc6f21206a96220c1c69c922da9e286254bf6fe`)
      .then(res => {
        if (res.data.results.length > 0) 
          return this.setState({images: res.data.results, notFound: false});
        this.setState({ notFound: true }); 
      })
  };

  render() {
    if (this.state.error) return <h1 style={{ textAlign: 'center' }}>Error!</h1>
    return (
      <div className="App">
        <NavBar />
        <Banner>
          <SearchBox searchHandler={ this.searchHandler } />
        </Banner>
        <ImageList images={ this.state.images } notFound={ this.state.notFound } />
      </div>
    );
  }
}

export default App;
