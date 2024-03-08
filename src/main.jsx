import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App.jsx'
import Footer from './components/footer/footer.jsx'
import './components/reset.scss'
import './index.css'
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App auto="toyota" price={14000} />
    <Footer firstword="marko" secondword="polo" />
  </BrowserRouter>,
)
