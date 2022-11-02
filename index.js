import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';//omit .js from App.js

const root = ReactDOM.createRoot(document.getElementById('root')); //created the entry point 
//where this user intrface should be loaded 
//to tell this should be root of our react application
root.render(<App />);
// what should we render in the div we selected here
// the inside of div should be replaced with <App>
// index .js first file to be executed
//It's this App component,which we, in the end, render in the place of that element with an id of root.
