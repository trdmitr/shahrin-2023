import React, { useState }  from 'react';
import { Fragment } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import { HomePage } from './Components/HomePage/HomePage';
import { CaverPage } from './Components/CaverPage/CaverPage';
import SinglPage from './Components/SingContent/SinglPage';
import { Context } from './Components/context'
function NotFound() {
  let location = useLocation();
  return (
    <div>
      <h3>
        Страница <code>{location.pathname}</code> не найдена!
      </h3>
      <Link to = "/">На главную</Link>
    </div>
  );
}
function App() {
  const [sings, setSings] = useState({});
  return (
    <div className="App">
      <Fragment>
      <Context.Provider value={{sings, setSings}}>
       <Router>
          <Routes>
         <Route exact path="/" element={<HomePage/>}/>
         <Route path="/cavers21" element={<CaverPage/> }/>
         <Route path="/cavers22" element={<CaverPage/>} />
         <Route path="/cavers23" element={<CaverPage/>} />
         <Route path="/cavers/:id" element={<SinglPage all_songs = {sings}/>} /> 
         <Route path="*" element={<NotFound />} />
       </Routes>
       </Router>
       </Context.Provider>   
   </Fragment>
    </div>
  );
}

export default App;
