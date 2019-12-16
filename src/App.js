import React, { useState, useEffect } from 'react';
import axios from 'axios';
import envs from './config';
// Components
import ImageList from './components/ImageList/ImageList';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import SearchBox from './components/SearchBox/SearchBox';

let API = 'https://api.unsplash.com';

const CONFIG = `?page=1&per_page=50&client_id=${envs.CLIENT_ID}`;

const App = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      let requestURL = API;
      if (query) requestURL += `/search/photos/${CONFIG}&query=${query}`;
      else requestURL += `/photos${CONFIG}`;

      try {
        let res = await axios(requestURL);

        if (query) setImages(res.data.results);
        else setImages(res.data);
        setNotFound(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchImages();
  }, [query]);

  if (error) return <h1 style={{ textAlign: 'center' }}>Error!</h1>;
  return (
    <div className='App'>
      <NavBar />
      <Banner>
        <SearchBox searchHandler={query => setQuery(query)} />
      </Banner>
      <ImageList images={images} notFound={notFound} />
    </div>
  );
};

export default React.memo(App);
