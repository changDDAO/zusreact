import './App.css';
import * as React from 'react';
import './usestate.css'
import Example from "./components/Example";
import Alert from 'react-bootstrap/Alert';
import {Route, Routes} from "react-router-dom";
import Test from "./components/Test";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";

function App() :React.JSX.Element {
  return (
  <Routes>
    <Route path="/usestate" element={<UseState/>}/>
    <Route path="/useeffect" element={<UseEffect/>}/>
    <Route path="/" element={<Example />} />
    <Route path="/test" element={<Test/>} />
  </Routes>
  );
}

export default App;
