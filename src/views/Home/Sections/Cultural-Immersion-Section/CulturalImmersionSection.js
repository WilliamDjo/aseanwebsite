// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import React from "react";
// import custom from "assets/jss/Homepage/styles.js";
import content from '../../../../assets/content/homepage/ceo';
import { EventCalendar } from '../../components/Calendar';


const {
  ceoImage,
} = content;

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
        <EventCalendar />
      </div>
    </div>
  );
}
