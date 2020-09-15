import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import NavbarCustom2 from './NavbarCustom2'

const Header = ({ siteTitle }) => (
<>
<NavbarCustom2 
            bg=""
            variant="light"
            expand="md"
            logo="https://uploads.divjoy.com/logo.svg"
          style={{background: 'transparent'}}
          />

</>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
