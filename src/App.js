import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Customers, Defaulters, Fulfilments, Overview } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import { Navbar, Sidebar } from './components';

function App() {
  const {  activeMenu } = useStateContext();

  return (
    <BrowserRouter>
    <div className="flex relative dark:bg-main-dark-bg">
    {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
             <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-neutral-100 min-h-screen md:ml-72 w-full  '
                : 'bg-neutral-100 dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Overview />)} />
                <Route path="/overview" element={(<Overview/>)} />

                <Route path="/customers" element={(<Customers/>)} />
                <Route path="/defaulters" element={(<Defaulters/>)} />
                <Route path="/fulfilments" element={(<Fulfilments/>)} />
              </Routes>
            </div>
          </div>
            </div>
    </BrowserRouter>
  );
}

export default App;
