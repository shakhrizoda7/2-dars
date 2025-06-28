import { strickMode} from 'react'
import { createRoot} from 'react-dom/clients'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
createRoot(document.getElementById('root')).render(
    <strickMode>
        <Header/>
        <App/>
    </strickMode>
)