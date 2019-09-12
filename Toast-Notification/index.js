import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ToastNotification from './ToastNotification'

const App = props => {
  const [toasts, setToasts] = useState([])

  const addToast = content => {
    const id = Math.random()
    const newToast = {
      content,
      id,
    }
    setToasts([...toasts, newToast])
  }

  const removeToast = id => {
    const newToasts = toasts.filter(t => t.id !== id)
    setToasts(newToasts)
  }

  const toastContainerStyles = {
    position: 'fixed',
    right: 0,
    top: 0,
  }

  return (
    <div>
      <button onClick={() => addToast('Click to Dismiss')}>
        add notification
      </button>
      <div className="toast-container" style={toastContainerStyles}>
        {toasts.map((t, i) => (
          <ToastNotification 
            key={t.id} 
            removeToast={removeToast} 
            id={t.id}
            content={t.content}
          />
        ))}
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)


