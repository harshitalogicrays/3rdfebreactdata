import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter} from 'react-router'
import Routing from './components/Routing'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routing/>
    </BrowserRouter>
)

