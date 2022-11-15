import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-35 -10 220 220"
        className={classes.svgHover}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_5" data-name="Layer 5">
            <rect className="cls-1" x="-10" y="31.33" width="250.0" height="10.85" rx="3.75"/>
            <rect className="cls-1" x="25.47" y="130.33" width="50.9" height="10.85" rx="3.75"/>
            <rect className="cls-1" x="70.0" y="30.00" width="9.9" height="112.54" rx="3.75" />
            <rect className="cls-1" x="133.62" y="57.1" width="9.9" height="108.08" rx="3.75"/>
            <rect className="cls-1" x="20.62" y="57.1" width="9.9" height="108.08" rx="3.75"/>
            <rect className="cls-1" x="90.6" y="-17.08" width="9.9" height="101.44" rx="3.75" transform="translate(150.0 70) rotate(145.24)"/>
            <rect className="cls-1" x="78.17" y="39.68" width="9.9" height="101.55" rx="3.75" transform="translate(96.28 -22.22) rotate(35.24)"/>
          </g>
        </g>
      </svg>
    );
};
