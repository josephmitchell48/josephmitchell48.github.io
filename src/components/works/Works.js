import React from 'react';
import { useState } from "react";
import Slider from "react-slick";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BlogCard } from './card';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './card.css';

import Infinera from '../../assets/work/INFN.svg';
import BreatheSuite from '../../assets/work/BreatheSuite-Logo-1.png';
import PuraJuniper from '../../assets/work/PuraJuniper-colour-print.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '80%',
    marginTop: '3em',
    marginBottom: "auto"
  },
}));

export const Works = () => {
  const classes = useStyles();
  const settings = {
    arrows: true,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '0px',
    dots: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,

        }
      }
    ]
  };

  const [works, setWorks] = useState([
    { 
      id: 1,
      company: 'Infinera',
      title: 'SDK ENGINEERING INTERN',
      date: 'May 2023 - August 2023', 
      description: ["Redesigned the command messaging system, introducing asynchronous communication capabilities across multiple microcontrollers.",
      "Engineered comprehensive parent class, facilitating inheritance for numerous subclasses, significantly minimizing code redundancy.",
      "Thoroughly documented all projects and developments to ensure seamless handovers and ease of reference for future development teams."],
      image: `${Infinera}`,
    },
    { 
      id: 2,
      company: 'BreatheSuite',
      title: 'FIRMWARE ENGINEERING INTERN',
      date: 'August 2022 - December 2022', 
      description: ["Applied knowledge in digital signal processing including Fourier transforms, filtering, and noise reduction to improve inhalation classification model by 6-12%.", 
      "Ported functions from Pythons Librosa library to the C programming language and implemented them in a real time operating system."],
      image: `${BreatheSuite}`,
    },
    { 
      id: 3,
      company: 'PuraJuniper',
      title: 'PROJECT PLANNER',
      date: 'April 2022 - September 2022', 
      description: ["Pitched business opportunity for deploying app suite throughout Newfoundland and Labrador health authorities.",
      "Facilitated meetings between PuraJuniper executives and local industry professionals leading to the development of a new major project."],
      image: `${PuraJuniper}`,
    },
    { 
      id: 4,
      company: 'PuraJuniper',
      title: 'JUNIOR SOFTWARE DEVELOPER',
      date: 'January 2022 - April 2022', 
      description: ["Developed React-based applications through agile methodology to create and display clinical practice guidelines complying to FHIR standards and guidelines.",      
      "Conducted multiple meetings to pitch new UI mock-ups created in Figma.",
      "Represented JuniperCDS at the March 2022 Infoway Projectathon, completing over 8 tests related to interoperability and exchange of health data within Canada."],
      image: `${PuraJuniper}`,
    }
  ]);

  return (
    <section id="works_wrapper">
      <Container component="main" className={classes.main} maxWidth="md">
        <Slider {...settings}>
          {works.map((work) => (
            <div className="work" key={ work.id }>
               <BlogCard id = {work.id} title = {work.title} company = {work.company} 
                          date = {work.date} description = {work.description} image ={work.image}/>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};
