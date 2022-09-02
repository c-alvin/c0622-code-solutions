import React from 'react';

export default class Carousel extends React.Component {
  render() {
    return (
    <div className='container'>
      <div className='box'>
        <div className='row'>
          <div className='column'> </div>
            <i className="fa-solid fa-chevron-left"></i>
          <div className='column'> </div>
            <img src="" alt="" />
          <div className='column'> </div>
            <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="row">
          <div className='column'>
            <div className='row'>
              <i className="fa-regular fa-circle" ></i>
              <i className="fa-regular fa-circle" ></i>
              <i className="fa-regular fa-circle" ></i>
              <i className="fa-regular fa-circle" ></i>
              <i className="fa-regular fa-circle" ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
