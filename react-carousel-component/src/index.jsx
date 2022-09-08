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
    link: 'https://www.vhv.rs/dpng/d/163-1631002_terminalmontage-luigi-hd-png-download.png'
  }
];
const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(<Carousel images={images}/>);
