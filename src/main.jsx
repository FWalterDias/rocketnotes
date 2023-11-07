import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MyRouts } from './routes.jsx';
import { ThemeProvider } from 'styled-components';
import theme  from "./styles/theme.js";
import GlobalStyle from "./styles/global.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MyRouts />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);