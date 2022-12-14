import { bool } from "prop-types";

import { AiOutlineFileText } from "react-icons/ai";
import { RiPriceTag3Line, RiContactsBookLine } from "react-icons/ri";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href='#' tabIndex={tabIndex}>
        <span aria-hidden='true'>
          <AiOutlineFileText className='icon' />
        </span>
        About us
      </a>
      <a href='#' tabIndex={tabIndex}>
        <span aria-hidden='true'>
          <RiContactsBookLine className='icon' />
        </span>
        Pricing
      </a>
      <a href='#' tabIndex={tabIndex}>
        <span aria-hidden='true'>
          <RiContactsBookLine className='icon' />
        </span>
        Contact
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu