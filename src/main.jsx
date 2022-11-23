import React,{Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './fonts.css'
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<p>loadding..</p>}>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </Suspense>
)
