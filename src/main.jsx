import React,{Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import Loader from "./component/loader/Loader";
import App from './App'
import './index.css'
import './fonts.css'
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loader/>}>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </Suspense>
)
