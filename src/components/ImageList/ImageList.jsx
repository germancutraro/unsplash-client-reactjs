import React, { Component } from 'react';
import './ImageList.css';
import Image from '../Image/Image';

class ImageList extends Component {
  render() {
    const images = this.props.images.map( (img, i) => <Image {...img} key={ i } />)
    return (
      <div className="Images">
        { this.props.notFound 
          ? <h1 className="notFound">Not found!</h1> 
          : images 
        }
      </div>
    );
  } 
};

export default ImageList;