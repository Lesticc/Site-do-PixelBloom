import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VariablesContext } from './contexts/variablesContext';

import Home from "./pages/Home"
import NotFound from "./pages/404";

import Header from "./components/header";

import './css/Fonts.css';
import './css/Vars.css';
import './css/Reset.css';
import './css/Main.css';
import './css/Media.css';

export default function App() {
  const [color, setColor] = useState(1);
  const [textColor, setTextColor] = useState(1);
  const [menuOn, setMenuOn] = useState(false);

  //1 - modo claro: ou seja, o background é claro e o texto escuro
  //2 - modo escuro: ou seja, o background é escuro e o texto claro
  
  document.getElementById("bodysite").style.backgroundColor = `var(--colorBackground${color})`;

  return (
    <VariablesContext.Provider value={{color, setColor, textColor, setTextColor, menuOn, setMenuOn}}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </VariablesContext.Provider>
  );
}