import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// const get = new GetService();

// get.getAllPerson().then((people) => {
//   people.forEach(element => {
//     console.log(element.name);
//   });
// });

// get.getPerson(3).then((element) => {
//     console.log(': ',element.name);
// });