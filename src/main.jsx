import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "@picocss/pico"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
/*
Yapılacak işlemler:

- [x]: Pico css kullanilsin
- [x]: Ana Görsel Olsun
- [x]: Altında 5 adet küçük görsel olsun
- [x]: kucuk gorsellerden birine tiklaninca ana gorsel degissin
- [x]: gorseller lorem picsumdan alinsin
- [x]: default olarak 200 no lu id secilsin
- [x]: görseller array olarak [200, 235, 121, 777, 204]

*/