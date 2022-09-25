import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: 0,
      intervalId: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.circleClick = this.circleClick.bind(this);
  }

  handleClick(event) {
    clearInterval(this.state.intervalId);
    this.setState({
      currentState: this.state.currentState >= this.props.images.length - 1
        ? 0
        : this.state.currentState + 1,
      intervalId: setInterval(() => this.setState({
        currentState: this.state.currentState >= this.props.images.length - 1
          ? 0
          : this.state.currentState + 1
      }), 3000)
    });
  }

  handleClickLeft(event) {
    clearInterval(this.state.intervalId);
    this.setState({
      currentState: this.state.currentState === 0
        ? this.props.images.length - 1
        : this.state.currentState - 1,
      intervalId: setInterval(() => this.setState({
        currentState: this.state.currentState >= this.props.images.length - 1
          ? 0
          : this.state.currentState + 1
      }), 3000)
    });
  }

  componentDidMount() {
    this.setState({
      intervalId: setInterval(() => this.setState({
        currentState: this.state.currentState >= this.props.images.length - 1
          ? 0
          : this.state.currentState + 1
      }), 3000)
    });
  }

  circleClick(event) {
    this.setState({
      currentState: Number(event.target.getAttribute('data-index'))
    });
    clearInterval(this.state.intervalId);
    this.setState({
      intervalId: setInterval(() => this.setState({
        currentState: this.state.currentState >= this.props.images.length - 1
          ? 0
          : this.state.currentState + 1
      }), 3000)
    });
  }

  render() {
    const circles =
    this.props.images.map((circle, index) => {
      const circlecolor = this.state.currentState === index
        ? 'fa-solid'
        : 'fa-regular';
      return (
          <i key={index} onClick={this.circleClick} data-index={index} className={`${circlecolor} fa-circle circle`} ></i>
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
