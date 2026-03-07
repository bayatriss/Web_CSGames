import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import EasterEgg from './EasterEgg.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={App}></Route>
        <Route path='/easter-egg' Component={EasterEgg}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
