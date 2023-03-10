import React from 'react';
import './App.scss';

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const MainPage = lazy(() => import('../pages/MainPage'));
const SingleCharPage = lazy(() => import('../pages/SingleCharPage'));


const App = () => {
  return (
    <Router>
      <div className='App'>
        <Suspense>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/character/:charId" element={<SingleCharPage/>}/>
          </Routes>
        </Suspense>
      </div>
      
    </Router>
  )
}

export default App
