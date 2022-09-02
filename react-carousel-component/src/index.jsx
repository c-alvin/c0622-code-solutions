import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  {
    link: 'https://static.wikia.nocookie.net/terminalmontage/images/c/c0/Kirbo.png/revision/latest?cb=20200609234320'
  },
  {
    link: 'https://static.wikia.nocookie.net/terminalmontage/images/7/74/Melee_Fox_TM.png/revision/latest/top-crop/width/360/height/360?cb=20200617045035'
  },
  {
    link: 'https://static.wikia.nocookie.net/terminalmontage/images/e/ec/Luigi_TM_Edit_Cut.png/revision/latest/top-crop/width/360/height/360?cb=20200724034944'
  }
];
const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(<Carousel images={images}/>);
