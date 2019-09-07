import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from './Modal'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toogleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button onClick={toogleModal}>
        Toogle the modal
      </button>

      <Modal 
        show={isOpen}
        onClose={toogleModal}
      >
        Here's some content for the modal
      </Modal>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)
