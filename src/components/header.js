import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import NavbarCustom2 from './NavbarCustom2'

const Header = ({ siteTitle }) => (
<>
<NavbarCustom2 
            bg="white"
            variant="light"
            expand="md"
            logo="https://res.cloudinary.com/dexdumfqy/image/upload/v1600246731/rbl-art-designs/albertos-logo-2_fqr69v.png"
          /*style={{background: 'transparent'}}*/
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
