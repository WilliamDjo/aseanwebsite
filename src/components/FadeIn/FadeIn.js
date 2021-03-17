import React from "react";
import Fade from 'react-reveal/Fade';

const FadeIn = ({ children }) => {
    return (
      <div>
        <Fade bottom>
          {children}
        </Fade>
      </div>
    );
};

export default FadeIn;