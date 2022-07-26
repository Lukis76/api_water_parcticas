import React from 'react';
// import { ReactDOM } from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';


const conteiner = document.getElementById('root');
const root = createRoot(conteiner);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
