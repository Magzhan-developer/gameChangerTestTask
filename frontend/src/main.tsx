import { createRoot } from 'react-dom/client'
import './_css/index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <App />
)
