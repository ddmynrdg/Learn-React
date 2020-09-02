import React from 'react'
import PropTypes from "prop-types"
export default function Navbar(props)  {
      return (
        <div>
            <h3>{props.title}</h3>
        </div>
    );
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "Default Props"
}