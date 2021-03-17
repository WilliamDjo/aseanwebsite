import React from "react"

import footerStyle from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <p>
        Copyright © UNSW ASEAN CONFERENCE {new Date().getFullYear()} - All
        rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
