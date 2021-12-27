import React from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'

export default function HeaderNav() {
  return (
    <>
      <Navbar color="info" container="md" full light>
        <NavbarBrand href="/">List Contact APP </NavbarBrand>
      </Navbar>
    </>
  )
}
