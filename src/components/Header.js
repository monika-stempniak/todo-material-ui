import React from "react";
import { NavLink } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { AppBar, Typography } from "@material-ui/core";

import { Container } from "../components";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      background: "#D5AC4E"
    },
    list: {
      listStyle: "none",
      padding: 0,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end"
    },
    listItem: {
      marginLeft: theme.spacing(4)
    },
    link: {
      textDecoration: "none",
      color: "#45050C"
    },
    activeLink: {
      color: "#c71c10"
    }
  })
);

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Container>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <NavLink
                exact
                to="/todos"
                className={classes.link}
                activeClassName={classes.activeLink}
              >
                <Typography variant="h6">Home</Typography>
              </NavLink>
            </li>
            <li className={classes.listItem}>
              <NavLink
                to="/about"
                className={classes.link}
                activeClassName={classes.activeLink}
                data-testid="about"
              >
                <Typography variant="h6">About</Typography>
              </NavLink>
            </li>
          </ul>
        </Container>
      </AppBar>
    </div>
  );
}
