import "./App.css";
import Index from "./components/index";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    customizeToolbar: {
      minHeight: 50,
    },
  }));

  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar className={classes.customizeToolbar}>
          <Typography variant="h6" className={classes.title}>
            Fleet Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <Index></Index>
    </div>
  );
}

export default App;
