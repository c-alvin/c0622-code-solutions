import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
  }

  handleClick(event) {
    if (this.state.currentState <= 3) {
      this.setState(prevState => ({
        currentState: prevState.currentState + 1
      }));
    } else {
      this.setState(prevState => ({
        currentState: 0
      }));
    }
  }

  handleClickLeft(event) {
    if (this.state.currentState >= 1) {
      this.setState(prevState => ({
        currentState: prevState.currentState - 1
      }));
    } else {
      this.setState(prevState => ({
        currentState: 4
      }));
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.state.currentState <= 3) {
        this.setState(prevState => ({
          currentState: prevState.currentState + 1
        }));
      } else {
        this.setState({
          currentState: 0
        });
      }
    }, 3000);
  }

  render() {
    const circles =
    this.props.images.map((circle, index) => {
      const circlecolor = this.state.currentState === index
        ? 'fa-solid'
        : 'fa-regular';
      return (
          <i key={index} className={`${circlecolor} fa-circle circle`} ></i>
      );
    });
    const images = this.props.images.map((image, index) => {
      return (
        <img key={index} src={image.link}></img>
      );
    });
    return (
    <div className='container'>
      <div className='box'>
        <div className='row'>
            <div className='column-fifth display-flex align-center justify-center' onClick={this.handleClickLeft}>
              <i className="fa-solid  fa-chevron-left chevron left"></i>
            </div>
            <div className='column-three-fifth display-flex align-center justify-center'>
              {images[this.state.currentState]}
            </div>
            <div className='column-fifth display-flex align-center justify-center' onClick={this.handleClick}>
              <i className="fa-solid fa-chevron-right chevron right"></i>
            </div>
        </div>
        <div className="row">
            <div className='column-half margin-auto'>
              <div className='row justify-center space-evenly margin-bot-small circle-row padding-small'>
                {circles}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
