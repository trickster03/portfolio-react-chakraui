import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home';
import Bio from './components/Bio';
import {BrowserRouter} from 'react-router-dom'
import theme from './styles/styles';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // wrap the entire application with chakra provider for easy theming and component access
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>
  </ChakraProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
