import React from 'react'

const Tab = props => {
  const { label, activeTab, selectTab } = props

  return (
    <li
      className={activeTab === label ? 'tab-title-item tab-title-active' : 'tab-title-item'}
      onClick={() => selectTab(label)}
    >
      {label}
    </li>
  )
}

export default Tab