import './App.css';
import * as React from 'react';
import Example from "./components/Example";
import Alert from 'react-bootstrap/Alert';
import {Route, Routes} from "react-router-dom";
import Test from "./components/Test";

function App() :React.JSX.Element {
  return (
  <Routes>
    <Route path="/" element={<Example />} />
    <Route path="/test" element={<Test/>} />
  </Routes>
  );
}

export default App;
