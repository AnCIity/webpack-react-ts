import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './index.css'

if (module && module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App name='root' age={25} />, document.querySelector('#root'))
