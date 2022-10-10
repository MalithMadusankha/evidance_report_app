import React from 'react'

export default function SideBar() {
    return(
        <>
        <nav id="sidebar" className="sidebar js-sidebar">
          <div className="sidebar-content js-simplebar">
            <a className="sidebar-brand" href="index.html">
              <span className="align-middle">Evidence Report</span>
            </a>

            <ul className="sidebar-nav">
              <li className="sidebar-header">Pages</li>

              <li className="sidebar-item active">
                <a className="sidebar-link" href="/home">
                  <i className="align-middle" data-feather="home"></i>{" "}
                  <span className="align-middle"> Home</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/voice">
                  <i className="align-middle" data-feather="layout"></i>{" "}
                  <span className="align-middle">Voices</span>
                </a>
              </li>

              <li className="sidebar-item">
                <a className="sidebar-link" href="/dowenload">
                  <i className="align-middle" data-feather="download"></i>{" "}
                  <span className="align-middle">Download</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        </>
    )
}