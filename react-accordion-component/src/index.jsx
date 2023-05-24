import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const topics = [
  {
    name: 'Hypertext Markup Language', description: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'
  },
  {
    name: 'Cascading Style Sheets', description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML'
  },
  {
    name: 'Javascript', description: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS'
  }
];

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(<Accordion topics={topics}/>);
