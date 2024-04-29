import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from 'components/App'
import { Provider } from 'react-redux'
import store from 'store'
import { Spinner } from 'react-bootstrap'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
)
