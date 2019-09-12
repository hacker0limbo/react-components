import React from 'react'

const ToastNotification = props => {
  const { removeToast, content, id } = props

  const toastStyle = {
    background: 'LemonChiffon',
    cursor: 'poiner',
    fontSize: 14,
    margin: 10,
    padding: 10
  }

  const dismiss = () => {
    removeToast(id)
  }

  return (
    <div onClick={dismiss} style={toastStyle}>
      {id} - {content}
    </div>
  )
}

export default ToastNotification