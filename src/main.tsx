// Global safety fallback for Fast Refresh stubs
if (typeof (globalThis as any).$RefreshReg$ === "undefined") {
  (globalThis as any).$RefreshReg$ = () => {}
}
if (typeof (globalThis as any).$RefreshSig$ === "undefined") {
  (globalThis as any).$RefreshSig$ = () => (type: any) => type
}
if (typeof (window as any).$RefreshReg$ === "undefined") {
  (window as any).$RefreshReg$ = () => {}
}
if (typeof (window as any).$RefreshSig$ === "undefined") {
  (window as any).$RefreshSig$ = () => (type: any) => type
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
