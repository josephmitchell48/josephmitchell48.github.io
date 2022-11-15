/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import BeatSlasher from '../../assets/recentprojects/beatslasher.png';
import Iso from '../../assets/recentprojects/ISOView.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Beat Slasher', 
      description: `Developed a mobile rhythm game 
      utilizing Unity 2D engine and C#. Co-designed original graphics, 
      sprites, scripts, and prefabs.`,
      alter: 'Beat Slasher',
      image: `${BeatSlasher}`,
    },
    { 
      id: 2,
      title: 'Parkinson\'s disease detector', 
      description: `Implemented and displayed a Parkinson's Disease Detector using Jupyter Notebook. 
      Data analysis and maniuplation was handled through use of PANDAs and Random Forest classifiers
       were implemented to achieve an accuracy score 93.8%`,
      alter: 'Parkinson\'s dicease detector',
      image: `${Portfolio}`,
    },
    { 
      id: 3,
      title: 'Cathedral of Christ our Saviour 3D Model', 
      description: `•		Utilized SolidWorks features such as circular patterns,
       lofts, chamfers, and assemblies to recreate the Cathedral of Christ our Savour.`,
      alter: 'Cathedral of Christ our Saviour 3D Model',
      image: `${Iso}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
