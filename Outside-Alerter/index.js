import React from 'react'
import ReactDOM from 'react-dom'
import OutsideAlerterClass from './OutsideAlerterClass'
import OutsideAlerterHook from './OutsideAlerterHook'

const App = () => {
  return (
    <div>
      <OutsideAlerterClass>
        Class 版本: <button>Click outside me</button>
      </OutsideAlerterClass>

      <OutsideAlerterHook>
        Hook 版本: <button>Click outside me</button>
      </OutsideAlerterHook>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
