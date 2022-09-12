import {bool, func} from "prop-types"

import { Twirl as Hamburger } from "hamburger-react"

import StyledBurger from './Burger.styled'

const Burger = ({open, setOpen, ...props}) => {
  const isExpanded = open ? true : false;

  return (
    <StyledBurger>
      <Hamburger
        toggled = {open}
        toggle={setOpen}
        size={32}
        direction= {0.4}
        distance={'lg'}
        aria-expanded={isExpanded}
        color={open ? "2b3252" : 'ef5455'}
      ></Hamburger>
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
}

export default Burger