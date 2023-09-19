import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";

import './Content.css';


const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: "auto",
    marginBottom: "auto",
  },
  heading: {
    marginLeft: theme.spacing(50),
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(10),
    },
  },
  jobs: {
    "@media (max-width: 768px)": {
      fontSize: '3rem',
    },
  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <section id="intro_wrapper">
        <div className= "intro">
          <Typography variant="h5" component="h2">
            <p>
              {`${FirstName} ${LastName}`}
            </p>
          </Typography>
          <Typography variant="h1" component="h1" className={classes.jobs}>
            <p>
              {`${Resume.basics.job1} + `}
            </p>
            <p>
              {`${Resume.basics.job2}`}
            </p>
          </Typography>
        </div>
      </section>
    </Container>
  );
};
