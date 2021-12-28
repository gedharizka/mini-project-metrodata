import React from 'react'
import {Navbar, NavbarBrand, NavItem, Nav} from 'reactstrap'
import {Link} from 'react-router-dom'

export default function HeaderNav() {
  return (
    <>
      <Navbar color="dark" container="md" full dark>
        <NavbarBrand href="/">List Contact APP </NavbarBrand>
        <Nav className='me-auto'>
          <NavItem>
            <Link className="nav-link" to="/list">List Contact</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  )
}
