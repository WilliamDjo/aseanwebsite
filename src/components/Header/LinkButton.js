import Button from "components/CustomButtons/Button.js";
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

import styles from "./LinkButton.module.scss";

const LinkButton = ({ href, color, buttonStyle, children }) => {
    
    return (
    <Link to={href} className={styles.link}>
      <Button color={color || "transparent"} className={buttonStyle}>
        {children}
      </Button>
    </Link>
  );
};

export default LinkButton;
