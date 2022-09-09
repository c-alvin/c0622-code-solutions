import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  {
    link: 'https://art.pixilart.com/thumb/a46ad68784aae5e.png'
  },
  {
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB66mMfXcl7zUvfgf1JfWFL7IyQwRyxJHzfbjPyEAU501hwmhfmTb13eSYdfatyAr5qXs&usqp=CAU'
  },
  {
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCPl9-5JRmY144cE2vUrlo8aONCMWlVtgalBXvd3Aowvi43Ga_s1B7FUQpJtZg6wr1k4&usqp=CAU'
  },
  {
    link: 'https://i.redd.it/hllby89s8f451.png'
  },
  {
    link: 'https://static.wikia.nocookie.net/1efa259a-bfd6-442e-b5fa-23b0b1db264b'
  }
];
const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(<Carousel images={images}/>);
