import React from 'react';
import './Image.css';

const Image = ({ user, urls }) => (
  <div className='Image-Wrapper'>
    <img src={urls.small} alt='' />
    <a href={user.links.html} target='_blank' rel='noopener noreferrer'>
      <div className='User-Info'>
        <div className='User-Info-Wrapper'>
          <img src={user.profile_image.small} alt='' className='User-Avatar' />
          <small className='Username'>
            {user.first_name} {user.last_name}
          </small>
        </div>
      </div>
    </a>
  </div>
);

export default React.memo(Image);
