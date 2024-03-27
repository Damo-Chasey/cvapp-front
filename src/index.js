//import { Route, Redirect, Switch } from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom/client';
import ArtView from './views/artview/artview.js';
import CorperateView from './views/corperateview/corperateview.js';
import './index.css'; 
import { Route, Routes, BrowserRouter } from "react-router-dom"


class App extends React.Component{
  render(){
    return(
        <div className="mainBody">
            <div className="contentArea">
              <BrowserRouter>
              <Routes>
                  <Route path="/corperate" element={<CorperateView/>}/>
                  <Route path="/art" element={<ArtView/>}/>
              </Routes>
              </BrowserRouter>
            </div>
        </div>
      );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);