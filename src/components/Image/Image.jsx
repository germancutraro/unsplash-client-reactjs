import React from 'react';
import './Image.css';

const Image = props => (
  <div className='Image-Wrapper'>
    <img src={props.urls.small} alt='' />
    <a href={props.user.links.html} target='_blank'>
      <div className='User-Info'>
        <div className='User-Info-Wrapper'>
          <img
            src={props.user.profile_image.small}
            alt=''
            className='User-Avatar'
          />
          <small className='Username'>
            {props.user.first_name} {props.user.last_name}
          </small>
        </div>
      </div>
    </a>
  </div>
);

export default React.memo(Image);
