import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.state.isOpen === event.target.getAttribute('data-topic')) {
      this.setState({
        isOpen: null
      });
    } else {
      this.setState({
        isOpen: event.target.getAttribute('data-topic')
      });
    }
  }

  render() {
    const listItems =
    this.props.topics.map((topic, index) => {
      const revealed = this.state.isOpen === index.toString()
        ? 'show'
        : 'hidden';
      return (
         <li onClick={this.handleClick} data-topic={index} key={index}>{topic.name}
            <div className={revealed}>{topic.description}</div>
         </li>
      );
    });
    return (
      <div>
        {listItems}
      </div>
    );
  }
}
