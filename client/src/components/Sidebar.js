import React from 'react'

const Sidebar = () => {
  return (
    <div className="wrapper">
        <nav id="sidebar" className="sidebar js-sidebar">
          <div className="sidebar-content js-simplebar">
            <a className="sidebar-brand" href="index.html">
              <span className="align-middle">UI Kit Data Tables</span>
            </a>

            <ul className="sidebar-nav">

              <li className="sidebar-header">
                Home
              </li>

              <li className="sidebar-header">
                Team Members
              </li>

              <li className="sidebar-header">
                Analytics
              </li>

              <li className="sidebar-header">
                Settings
              </li>

            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Sidebar
