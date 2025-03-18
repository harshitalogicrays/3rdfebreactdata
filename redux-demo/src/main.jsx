import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import mystore from './redux/mystore.js'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import AddUSer from './AddUSer.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={mystore}>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/add' element={<AddUSer/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>,
)
