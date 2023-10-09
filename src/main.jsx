import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Form from "./Form.jsx"

import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<App />} />
        <Route path="form" element={<Form />} />
      </Routes>
  </React.StrictMode>,
  </BrowserRouter>
)
