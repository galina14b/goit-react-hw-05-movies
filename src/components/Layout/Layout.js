import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";

import styled from "styled-components";

const StyledLink = styled(NavLink)`

  &.active {
    color: darkorange !important;
  }
`;


const Layout = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <StyledLink className="nav-link" aria-current="page" to="/">Home</StyledLink>
                </li>
                <li className="nav-item">
                  <StyledLink className="nav-link" to="/movies">Movies</StyledLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
  )
}

export default Layout;