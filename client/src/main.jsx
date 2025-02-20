import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

import { Provider } from 'react-redux'; 
import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <Provider store={store}>
    <App />
    <Toaster />
  </Provider>
  </BrowserRouter>
)
