/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import LinkButton from "./LinkButton";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    // <List className={classes.list}>
    //   <ListItem className={classes.listItem}>
    //     <CustomDropdown
    //       noLiPadding
    //       buttonText="Components"
    //       buttonProps={{
    //         className: classes.navLink,
    //         color: "transparent"
    //       }}
    //       buttonIcon={Apps}
    //       dropdownList={[
    //         <Link to="/" className={classes.dropdownLink}>
    //           All components
    //         </Link>,
    //         <a
    //           href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
    //           target="_blank"
    //           className={classes.dropdownLink}
    //         >
    //           Documentation
    //         </a>
    //       ]}
    //     />
    //   </ListItem>
    //   <ListItem className={classes.listItem}>
    //     <Button
    //       href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
    //       color="transparent"
    //       target="_blank"
    //       className={classes.navLink}
    //     >
    //       <CloudDownload className={classes.icons} /> Download
    //     </Button>
    //   </ListItem>
    //   <ListItem className={classes.listItem}>
    //     {/*<Tooltip title="Delete">
    //       <IconButton aria-label="Delete">
    //         <DeleteIcon />
    //       </IconButton>
    //     </Tooltip>*/}
    //     <Tooltip
    //       id="instagram-twitter"
    //       title="Follow us on twitter"
    //       placement={window.innerWidth > 959 ? "top" : "left"}
    //       classes={{ tooltip: classes.tooltip }}
    //     >
    //       <Button
    //         href="https://twitter.com/CreativeTim?ref=creativetim"
    //         target="_blank"
    //         color="transparent"
    //         className={classes.navLink}
    //       >
    //         <i className={classes.socialIcons + " fab fa-twitter"} />
    //       </Button>
    //     </Tooltip>
    //   </ListItem>
    //   <ListItem className={classes.listItem}>
    //     <Tooltip
    //       id="instagram-facebook"
    //       title="Follow us on facebook"
    //       placement={window.innerWidth > 959 ? "top" : "left"}
    //       classes={{ tooltip: classes.tooltip }}
    //     >
    //       <Button
    //         color="transparent"
    //         href="https://www.facebook.com/CreativeTim?ref=creativetim"
    //         target="_blank"
    //         className={classes.navLink}
    //       >
    //         <i className={classes.socialIcons + " fab fa-facebook"} />
    //       </Button>
    //     </Tooltip>
    //   </ListItem>
    //   <ListItem className={classes.listItem}>
    //     <Tooltip
    //       id="instagram-tooltip"
    //       title="Follow us on instagram"
    //       placement={window.innerWidth > 959 ? "top" : "left"}
    //       classes={{ tooltip: classes.tooltip }}
    //     >
    //       <Button
    //         color="transparent"
    //         href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
    //         target="_blank"
    //         className={classes.navLink}
    //       >
    //         <i className={classes.socialIcons + " fab fa-instagram"} />
    //       </Button>
    //     </Tooltip>
    //   </ListItem>
    // </List>
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <LinkButton href="/" color="transparent" buttonStyle={classes.navLink}>
          Home
        </LinkButton>
      </ListItem>

      <ListItem className={classes.listItem}>
        <LinkButton
          href="/about"
          color="transparent"
          buttonStyle={classes.navLink}
        >
          About ASEAN
        </LinkButton>
      </ListItem>

      <ListItem className={classes.listItem}>
        <LinkButton
          href="/profile-page"
          color="transparent"
          buttonStyle={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Our Team
        </LinkButton>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Cultural Immersion"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <LinkButton
              href="/culturalimmersion/about"
              buttonStyle={classes.dropdownLink}
              color="transparent"
            >
              About
            </LinkButton>,
            <LinkButton
              href="/culturalimmersion/speakers"
              color="transparent"
              buttonStyle={classes.dropdownLink}
            >
              Speakers
            </LinkButton>,
            <LinkButton
              href="/culturalimmersion/schedule"
              color="transparent"
              buttonStyle={classes.dropdownLink}
            >
              Schedule
            </LinkButton>,
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Misc"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/components">
              <a className={classes.dropdownLink}>All components</a>
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}
