# api_water_parcticas

aplicacion del clima con una api externa

# React 18

`/index.js`

```js
import React from 'react'
// import { ReactDOM } from 'react';
import { createRoot } from 'react-dom/client' //linea esperada en React 18
import App from './App'
import './index.css'

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// nueva forma de estructurar tu raiz
const conteiner = document.getElementById('root')
const root = createRoot(conteiner)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

`App.js`

```js
import React from 'react'

export default function App() {
  return <h1>App</h1>
}
```
