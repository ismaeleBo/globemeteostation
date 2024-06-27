import React, { useEffect, useMemo } from "react";
import "./styles.css";
import { Container } from "@mui/material";
import { Conditions } from "../../types";
import { makeItRain } from "./rain";

interface BackgroundProps {
  children: JSX.Element;
  conditions?: Conditions;
}

const Background: React.FC<BackgroundProps> = ({ children, conditions }) => {
  const classes = useMemo(() => {
    if (!conditions) {
      return "day";
    }

    if (conditions.isDay) {
      return conditions.isRaining ? "rainyday" : "day";
    }

    return "night";
  }, [conditions]);

  useEffect(() => {
    if (conditions?.isRaining) {
      makeItRain();
    }
  }, [conditions]);

  return (
    <div className={`background ${classes}`}>
      <div className="background-overlay" />
      {conditions?.isRaining && (
        <>
          <div className="rain front-row"></div>
          <div className="rain back-row"></div>
        </>
      )}
      <Container sx={{ zIndex: 2 }}>{children}</Container>
    </div>
  );
};

export default Background;
