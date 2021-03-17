import {
  Button
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";
import FadeIn from 'components/FadeIn/FadeIn';
import EmbeddedPlayer from 'components/EmbeddedPlayer/EmbeddedPlayer';

const Link = () => {
  return (
    <a href=""></a>
  )
}

const ceoImage = "https://images.unsplash.com/photo-1564106273110-e2965fcabb74?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF2aWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  // Styles
  const padded = {
    "padding": "20px"
  };
  const textCenter = {
    "text-align": "center"
  };
  // const 

  return (
    <div className={classes.sections}>
      <div className={classes.container}>

        <Link href="/CulturalImmersion">
          <a>
            <strong>
              Cultural immersion
            </strong>
          </a>
        </Link>

        {/* Slogan banner */}
        <div className={`${classes.sloganSection} ${classes.textCentered}`}>
          <div className={classes.whiteTitle}>
            <h2>Inspiring the Present</h2>
          </div>
          <div className={`${classes.whiteTitle} ${classes.textCentered}`}>
            <h2>Envisioning the Future</h2>
          </div>
        </div>

        {/* Welcome message */}
        <div className={`${classes.title} ${classes.textCentered}`}>
          <h2>Welcome Message</h2>
        </div>
        <hr />


        <FadeIn>
          <GridContainer>
            <GridItem sm={4} md={4} lg={3} style={padded}>
              <h3 style={textCenter}>A message from our CEO:</h3>
              <img src={ceoImage} style={{"width": "100%"}}/>
            </GridItem>
            <GridItem sm={8} md={8} lg={8} style={padded}>
              <h3 style={textCenter}>
                Anthony Paulo Sunjaya
              </h3>
              {/* TODO: Take this out to a markdown file */}
              <div style={padded}>
                It is my pleasure to welcome you to the UNSW ASEAN CONFERENCE 2020. The Conference aims to amalgamate socio-cultural, political and, economic interests all under one roof, whilst actively collaborating with the Australian and ASEAN youth from 10 different countries. 
              </div>
              <div style={padded}>
                The ultimate objective of the conference is to not only embolden and strengthen the ASEAN identity, but also empower and encourage the ASEAN-Australasian youth to more proactively engage, in the increasingly important and mutually beneficial future of the trans-international and transdisciplinary exchange of knowledge.
              </div>

              <div style={padded}>
                The Conference spread over 3 days will present over 40 outstanding speakers from former Prime Ministers, Ministers, CEOs, academics to activists talking about issues that matter to ASEAN and globally today.
              </div>
              <div style={padded}>
                With a wide variety of topics to look forward to from Social Entrepreneurship, Human Rights, Cybersecurity, Climate Change, Women Empowerment to Impacts of COVID-19, there's certainly a topic for you. We look forward to seeing you all on the 10th, 17th and 24th of October 2020.
              </div>
            </GridItem>
          </GridContainer>
        </FadeIn>

        <FadeIn>
          <EmbeddedPlayer style={{"display": "block", "margin": "0 auto"}} videoId="yiYLijzTb5Q" />
        </FadeIn>

        <FadeIn>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <h3>Vision</h3>
              <div>
                Inspiring the Present. Envisioning the Future of ASEAN, Australia and global relations.
              </div>
              <div>
                Download our handbook for free!
              </div>
            </GridItem>
            <GridItem xs={12} sm={8} md={8} lg={8}>
              <h3>
                Mission
              </h3>
              {/* TODO: Take this out to a markdown file */}
              <div>
                The Conference aims to bring together over 2000 participants from ASEAN, Australia and globally to connect and discuss possible solutions about issues that matter to ASEAN and globally today including our joint future beyond the COVID-19 pandemic.  
              </div>
              <Button variant="contained" color="primary">
                Download Handbook
              </Button>
            </GridItem>
          </GridContainer>
        </FadeIn>
      </div>
    </div>
  );
}
