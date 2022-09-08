import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: 0
    };
  }

  render() {
    const listImage =
    this.props.images.map((topic, index) => {
      return (
          <img data-images={index} key={index} src={topic.link}></img>
      );
    });
    return (
    <div className='container'>
      <div className='box'>
        <div className='row'>
            <div className='column-fifth display-flex align-center justify-center'>
              <i className="fa-solid fa-chevron-left chevron left"></i>
            </div>
            <div className='column-three-fifth display-flex align-center justify-center'>
              {listImage}
            </div>
            <div className='column-fifth display-flex align-center justify-center'>
              <i className="fa-solid fa-chevron-right chevron right"></i>
            </div>
        </div>
        <div className="row">
            <div className='column-half margin-auto'>
              <div className='row justify-center space-evenly margin-bot-small circle-row padding-small'>
                <i className="fa-regular fa-circle circle " ></i>
                <i className="fa-regular fa-circle circle" ></i>
                <i className="fa-regular fa-circle circle" ></i>
                <i className="fa-regular fa-circle circle" ></i>
                <i className="fa-regular fa-circle circle" ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
