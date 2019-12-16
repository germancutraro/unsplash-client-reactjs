import React from 'react';
import './ImageList.css';
import Image from '../Image/Image';

const ImageList = ({ images, notFound }) => {
  const outputImages = images.map((img, i) => <Image key={i} {...img} />);
  return (
    <div className='Images'>
      {notFound ? <h1 className='notFound'>Not found!</h1> : outputImages}
    </div>
  );
};

export default React.memo(ImageList);
